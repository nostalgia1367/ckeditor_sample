package com.jobtoy.board.web;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.web.bind.ServletRequestUtils;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.multiaction.MultiActionController;

public class BoardCtrl extends MultiActionController {
	
	/** Logging */
	private final Log logger = LogFactory.getLog(getClass());
	private MessageSourceAccessor messages = null;
	
	public void setMessages(MessageSourceAccessor messages) {
		this.messages = messages;
	}
	
	/**
	 * Default Constructor
	 */
	public BoardCtrl() {
		super();
	}
	
	public ModelAndView list(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("entering boardList method...");
		String resultURL = "";
    	String paging = "";
		Map<String, Object> resultMap = new HashMap<String, Object>();
    	resultMap.put("boardGroupNum", paging);
    	
    	resultURL = "/board/list";
    	
    	return new ModelAndView(resultURL, "resultMap", resultMap);
	}
	
	public ModelAndView save(HttpServletRequest request, HttpServletResponse response) throws Exception {
		logger.info("entering boardList method...");
		String resultURL = "";
    	String paging = "";
    	String contents = "";
    	
    	contents = ServletRequestUtils.getStringParameter(request, "contents", "");
    	
		Map<String, Object> resultMap = new HashMap<String, Object>();
    	resultMap.put("contents", contents);
    	
    	resultURL = "/board/save";
    	
    	return new ModelAndView(resultURL, "resultMap", resultMap);
	}
}
