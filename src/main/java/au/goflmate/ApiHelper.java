package au.goflmate;

import java.util.Comparator;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public final class ApiHelper {
    public static String getSign(Map<String,Object> msg, String secret) {
        List<String> keys = new LinkedList(msg.keySet());
        keys.sort(Comparator.naturalOrder());

        String signStr = null;
        for(String key : keys) {
            if(signStr == null) {
                signStr = (key + "=" + msg.get(key).toString());
            }
            else  {
                signStr += "&"+(key + "=" + msg.get(key).toString());
            }
        }
        signStr += "&key=" + secret;

        String result = Md5.MD5(signStr);
        if(result != null) {
            return result.toUpperCase();
        }
        return null;
    }
}
