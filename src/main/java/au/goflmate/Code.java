package au.goflmate;
public class Code {
	public static final int SUCCES = 0;
	public static final int ERROR_SIGN_FAILED = 1; 		//签名错误			Sign is error!
	public static final int ERROR_EXIST_USER = 2; 		// 用户已经存在		Mobile number already registered!
	public static final int ERROR_CODE_FAILED = 3; 		// 验证码错误		Invalid verification code!
	public static final int ERROR_DB_BUSY = 4; 			// 数据库繁忙		Db is busy!
	public static final int ERROR_UNKNOW_ERR = 5; 		// 未知错误		Network error!
	public static final int ERROR_SENDSMS_FAILED = 6; 	// 发送验证码失败	Send Message failed!
}
