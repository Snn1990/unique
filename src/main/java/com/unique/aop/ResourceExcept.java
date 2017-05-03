package com.unique.aop;

/**
 * 通用异常处理
 * @author SNN
 *
 */
public class ResourceExcept extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = -8879716843420582505L;
	
	/**
	 * 操作编码
	 */
	private String msgCode;
	/**
	 * 操作编码对应的关键信息
	 */
	private String[] args;

	private String msg;
	
	public String getMsgCode() {
		return msgCode;
	}
	public void setMsgCode(String msgCode) {
		this.msgCode = msgCode;
	}
	public String[] getArgs() {
		return args;
	}
	public void setArgs(String[] args) {
		this.args = args;
	}
	
	/** 业务校验
	 * 
	 * @param msgId
	 * @param msg */
	public ResourceExcept(String msgId, String msg) {
		this.msg = msg;
		this.msgCode = msgId;
	}

	/** 需要在通常情况下需要输入异常代码，及其所需的相关参数。
	 * 
	 * @param msgId
	 * @param args */
	public ResourceExcept(String msgId, String... args) {
		this.args = args;
		this.msgCode = msgId;
	}

	/** 返回业务校验码
	 * 
	 * @param msgId */
	public ResourceExcept(String msgId) {
		this.msgCode = msgId;
	}

	public ResourceExcept(String msgId, String message, Throwable cause) {
		super(message, cause);
		this.msgCode = msgId;
	}

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}
}
