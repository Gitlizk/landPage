package au.goflmate;


import java.security.MessageDigest;
import java.util.List;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;

public class Md5 {
    public static String getDataMd5(byte[] data) {
        try {
            MessageDigest MD5 = MessageDigest.getInstance("MD5");
            MD5.update(data, 0, data.length);
            return new String(Hex.encodeHex(MD5.digest()));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String getDataMd5(List<byte[]> bufferList) {
        try {
            MessageDigest MD5 = MessageDigest.getInstance("MD5");
            for (byte[] buffer : bufferList) {
                MD5.update(buffer, 0, buffer.length);
            }
            return new String(Hex.encodeHex(MD5.digest()));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 求一个字符串的md5值
     * @param target 字符串
     * @return md5 value
     */
    public static String MD5(String target) {
        return DigestUtils.md5Hex(target);
    }
}