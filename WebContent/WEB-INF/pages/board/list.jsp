<%--
  - Author      :   
  - Date        :   
  - Copyright (c) 2012 JOBTOY All rights reserved
  - @(#)
  - Description :   
  --%>

<%@ page language="java" %>
<%@ page contentType="text/html; charset=utf-8" %>
<%@ page pageEncoding="utf-8"%>

<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt_rt" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>ckeditor ckeditor_sample</title>

<script type="text/javascript" src="<c:url value="/ckeditor/ckeditor.js" />"></script>
<script type="text/javascript" src="<c:url value="/commons/scripts/jquery-1.8.1.js" />"></script>

<script type="text/JavaScript">

	window.onload=function(){
		CKEDITOR.replace('contents',{enterMode:'2',shiftEnterMode:'3'});
	};
	
	function goSave() {
	    var tFormName = "commandForm";
	    var tFormObj = document.forms[tFormName]
		tFormObj.submit();
	}
</script>

</head>
<body>
CKEDITOR ckeditor_sample
<form name="commandForm" id="commandForm" method="post" target="_self" action="<c:url value="/board/save.do" />">
<table width="100%" border="0" cellpadding="0" cellspacing="1" >
	<tr>
		<td>
			<%-- CKEDITER --%>
			<textarea id="contents" name="contents" style="width:100%; height:50%; resize:none;">
				내용을 입력해 주세요
			</textarea>	
		</td>
	</tr>
</table>
</form>
<a href="javascript:goSave();" >[저장]</a>

</body>
</html>