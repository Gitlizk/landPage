package au.goflmate;


import com.alibaba.fastjson.JSONObject;

public class ResponseResult {
	public static String sendResult(String res){
		Result result = JSONObject.parseObject(res, Result.class);
		if(result.getErrorCode() == Code.SUCCES){
			return "{\"ret\":\"Success\"}";
		}else if(result.getErrorCode() == Code.ERROR_SIGN_FAILED){
			//签名错误	Sign is error
			return "{\"ret\":\"Failure\",\"error\":\"Sign is error\"}";
		}else if(result.getErrorCode() == Code.ERROR_EXIST_USER){
			//用户已经存在	Mobile number already registered!
			return "{\"ret\":\"Failure\",\"error\":\"Mobile number already registered\"}";
		}else if(result.getErrorCode() == Code.ERROR_CODE_FAILED){
			//验证码错误 Invalid verification code
			return "{\"ret\":\"Failure\",\"error\":\"Invalid verification code\"}";
		}else if(result.getErrorCode() == Code.ERROR_DB_BUSY){
			//数据库繁忙 Db is busy
			return "{\"ret\":\"Failure\",\"error\":\"Database busy\"}";
		}else if(result.getErrorCode() == Code.ERROR_UNKNOW_ERR){
			//未知错误	Network error
			return "{\"ret\":\"Failure\",\"error\":\"Unknown error\"}";
		}else if(result.getErrorCode() == Code.ERROR_SENDSMS_FAILED){
			// 发送验证码失败	Send Message failed
			return "{\"ret\":\"Failure\",\"error\":\"Send Message failed\"}";
		}else{
			return "{\"ret\":\"Failure\",\"error\":\"Network error\"}";
		}
	}

}

