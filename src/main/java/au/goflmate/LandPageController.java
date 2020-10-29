package au.goflmate;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.Map;

import org.apache.http.HttpResponse;
import org.apache.http.HttpVersion;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.protocol.HTTP;
import org.apache.http.util.EntityUtils;
@Controller
@RequestMapping("/")
public class LandPageController {
    private static final long serialVersionUID = 7754289209306009472L;
    public static final int TIMEOUT = 60;//这个要弄长点
    public static final String ACCEPT_NAME = "Accept";
    public static final String ACCEPT = "application/json;charset=UTF-8";


    @Value("${host}")
    private  String host;


    /**
     * 判断分享关系是否存在
     */
    @RequestMapping("/relationExist")
    public void relationExist(HttpServletResponse response){
        try {
            boolean exist = false;
            //设置编码方式
            response.setCharacterEncoding("UTF-8");
            PrintWriter out = response.getWriter();
            out.print(exist);

            out.flush();
            out.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @RequestMapping("/sendMsg")
    public void sendMsg(HttpServletRequest request,HttpServletResponse response2) throws IOException {

        String area = request.getParameter("area");
        String phone = request.getParameter("phone");

        try {
            if(area != null && phone != null){
                RequestConfig defaultRequestConfig = RequestConfig.custom().setSocketTimeout(TIMEOUT * 1000).setConnectTimeout(TIMEOUT * 1000).setConnectionRequestTimeout(TIMEOUT * 1000).build();

                CloseableHttpClient client = HttpClientBuilder.create().build();
                //119.29.130.118
                HttpPost post = new HttpPost(host + "/sms");

                System.out.println("*** sms:" + host+ "/sms");

                post.setProtocolVersion(HttpVersion.HTTP_1_1);
                post.addHeader(HTTP.CONN_DIRECTIVE, HTTP.CONN_CLOSE);
                post.addHeader(ACCEPT_NAME, ACCEPT);
                post.setConfig(defaultRequestConfig);

                Map<String,Object> params = new HashMap<>();
                params.put("area", area);
                params.put("phone", phone);

                String countSign = ApiHelper.getSign(params, GolfConst.HTTP_API_SECRET);
                String json = "{\"area\":\"" + area + "\",\"phone\":\"" + phone +"\",\"sign\":\""+countSign+"\"}";
                System.out.println("*** json:" + json);

                StringEntity requestEntity = new StringEntity(json,"utf-8");
                post.setEntity(requestEntity);

                HttpResponse response = client.execute(post);
                String res = EntityUtils.toString(response.getEntity());
                System.out.println(res);

                post.releaseConnection();
                client.close();

                PrintWriter writer = response2.getWriter();
                writer.write(ResponseResult.sendResult(res));
                writer.close();
            }
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @RequestMapping("/preRegister")
    public void preRegister(HttpServletRequest request,HttpServletResponse response2) throws IOException {

        String area = request.getParameter("area");
        String phone = request.getParameter("phone");
        Integer referUserId = null;
        try{
            referUserId=Integer.parseInt(request.getParameter("referUserId"));
        }catch (Exception e){

        }
        String code = request.getParameter("code");
        Integer isCoach = request.getParameter("isCoach")==null?null:Integer.parseInt(request.getParameter("isCoach"));

        try {
            if(area != null && phone != null){
                RequestConfig defaultRequestConfig = RequestConfig.custom().setSocketTimeout(TIMEOUT * 1000).setConnectTimeout(TIMEOUT * 1000).setConnectionRequestTimeout(TIMEOUT * 1000).build();

                CloseableHttpClient client = HttpClientBuilder.create().build();
                //119.29.130.118
                HttpPost post = new HttpPost(host + "/preregister");

                System.out.println("*** sms:" + host + "/preregister");

                post.setProtocolVersion(HttpVersion.HTTP_1_1);
                post.addHeader(HTTP.CONN_DIRECTIVE, HTTP.CONN_CLOSE);
                post.addHeader(ACCEPT_NAME, ACCEPT);
                post.setConfig(defaultRequestConfig);

                Map<String,Object> params = new HashMap<String,Object>();
                params.put("area", area);
                params.put("phone", phone);
                params.put("referUserId", referUserId);
                params.put("code", code);
                params.put("isCoach", isCoach);

                String countSign = ApiHelper.getSign(params, GolfConst.HTTP_API_SECRET);
                System.out.println("*** registerSign:" + countSign);

                String json = "{\"area\":\"" + area + "\",\"phone\":\"" + phone +"\",\"referUserId\":" + referUserId +",\"code\":\"" + code +"\",\"isCoach\":" + isCoach +",\"sign\":\"" + countSign + "\"}";
                System.out.println("*** json:" + json);

                StringEntity requestEntity = new StringEntity(json,"utf-8");
                post.setEntity(requestEntity);

                HttpResponse response = client.execute(post);
                String res = EntityUtils.toString(response.getEntity());
                System.out.println(res);

                post.releaseConnection();
                client.close();


                PrintWriter writer = response2.getWriter();
                writer.write(ResponseResult.sendResult(res));
                writer.close();
            }
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    @RequestMapping("/save")
    public String save(){
        return "success";
    }
}
