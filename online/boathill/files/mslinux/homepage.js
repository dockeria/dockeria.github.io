var IsIEPlus = false
if (navigator.userAgent.indexOf("MSIE")    != -1 && 
	navigator.userAgent.indexOf("Windows") != -1 && 
	navigator.appVersion.substring(0,1) > 3)
{
	IsIEPlus = true;
}

if (IsIEPlus)
{
	var newLineChar = String.fromCharCode(10);
	var char34 = String.fromCharCode(34);
	var FirstCRMsg = true;
	var hpStr;
	var hpLinkCnt = 0;
	var hpLinkWidth = 0;

	hpStr =
		"<TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0>" +
		"<TR>" +
		"<TD VALIGN=TOP><font face='verdana,arial,helvetica' size=1>" +
		"	<!--CATEGORY_LINKS--><BR>" +
		"</TD>" +
		"</TR>" +
		"</TABLE>";
}
else
{
	var newLineChar = String.fromCharCode(10);
	var char34 = String.fromCharCode(34);
	var FirstCRMsg = true;
	var hpStr;
	var hpLinkCnt = 0;
	var hpLinkWidth = 0;

	hpStr =
		"<TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0>" +
		"<TR>" +
		"<TD VALIGN=TOP><font face='verdana,arial,helvetica'color=white size=1>" +

			"<A ><font face='verdana,arial,helvetica'color=white size=2>Windows Media Overview</font></A><BR>" +
			"<A HREF=/windows/windowsmedia/en/overview/default.asp >Introduction</A><BR>" +
			"<A HREF=/windows/windowsmedia/en/compare/tryit.asp >Quality Showcase</A><BR>" +
			"<A HREF=/windows/windowsmedia/en/compare/default.asp >Dare to Compare</A><BR>" +
			"<A HREF=/windows/windowsmedia/en/overview/FAQ.asp >FAQ</A><BR>" +
			
			"<A ><font face='verdana,arial,helvetica'color=white size=2>Windows Media Technologies</font></A><BR>" +
			"<A HREF=/windows/windowsmedia/en/wm7/default.asp>Technologies Home</A><BR>" +
			"<A HREF=/windows/windowsmedia/en/software/Playerv7.asp >Windows Media Player 7 </A><BR>" +
			"<A HREF=/windows/windowsmedia/en/wm7/encoder/default.asp >Windows Media Encoder<BR>" +
			"<A HREF=/windows/windowsmedia/en/wm7/format.asp >Windows Media Format 7</A><BR>" +
			"<A HREF=http://msdn.microsoft.com/workshop/c-frame.htm?950110362224#/workshop/imedia/windowsmedia/sdk/wmsdk_fmt.asp >Windows Media Format SDK 7</A><BR>" +
			"<A HREF=/windows/windowsmedia/en/WM7/drm.asp >WM Rights Manager 7</A><BR>" +
			"<A HREF=/windows/windowsmedia/en/technologies/services.asp >Windows Media Services</A><BR>" +
			
			"<A ><font face='verdana,arial,helvetica'color=white size=2>Windows Media Solutions</font></A><BR>" +
			"<A HREF=/windows/windowsmedia/en/solutions/dbm.asp >Digital Broadcast Manager </A><BR>" +
					
			
"<br><br>"+
		"</TD>" +
		"</TR>" +
		"</TABLE>";
}

function showHomePage()
{
	buildNavigation();

	//alert(hpStr);
	document.write(hpStr);
}

function setHomePageLinkTitle(TitleStr)
{
	SubStr = "<!--HOMEPAGE_LINKS-->";
	if (hpStr.indexOf(SubStr) >= 0)
	{
		hpLinkWidth = TitleStr.length;
		SrcStr = TitleStr + "<BR>" +
				 "<SELECT NAME='target' onChange='goHomePage(this);'>" +
				 "<!--HOMEPAGE_LINK-->" +
				 "</SELECT>";
		hpStr = hpStr.replace(SubStr, SrcStr);	
	}
}

function addHomePageLink(LinkStr, LinkUrl, defaultSelection)
{
	SubStr = "<!--HOMEPAGE_LINK-->";
	if (hpStr.indexOf(SubStr) >= 0)
	{
		hpLinkCnt += 1;
		SrcStr = "<OPTION VALUE='" + hpLinkCnt + "'";
		if (defaultSelection) SrcStr += " SELECTED";
		SrcStr += ">" + LinkStr;
		
		//Make the select box the same width as the link title.
		for (i = LinkStr.length+1; i < hpLinkWidth+2; i++)
			SrcStr += "&nbsp;";

		SrcStr += SubStr;
		hpStr = hpStr.replace(SubStr, SrcStr);
		
		hpStr += "<A ID=ID_HPLink" + hpLinkCnt + " STYLE='display:none' HREF='" + LinkUrl + "'>1</A>";
	}
}

function addCategory(CatIDStr, CatStr, defaultShow, Overlay)
{
		sImg   = defaultShow? "minus.gif" : "plus.gif";
		sStyle = defaultShow? "black"     : "none";
	
	SubStr = "<!--CATEGORY_LINKS-->";
	if (hpStr.indexOf(SubStr) >= 0)
	{
		SrcStr = "<DIV STYLE='cursor:hand;'" +
				 "     ID=C_" + CatIDStr +
				 "     onClick=clickCategory(" + char34 + CatIDStr + char34 + ") NOWRAP>" +
				 "<IMG SRC='./" + sImg + "' ALT='Click Here!'" +
				 "     ID=I_" + CatIDStr +
				 "     onClick=clickCategory(" + char34 + CatIDStr + char34 + ") ALIGN=middle BORDER=0>&nbsp;" +
				 "<A STYLE='color:white;text-decoration:none;'" +
				 "   HREF='noop' " +
				 " Title=" + Overlay +
				 "   onfocus=" + char34 + "window.status='';" + char34 + 
				 "   onmouseover=" + char34 + "window.status='';" + char34 + 
				 "   onclick=" + char34 + "window.event.returnValue = false;" + char34 + ">" +
				 "<B>" + CatStr + "</B></A><BR>" +
				 "<DIV STYLE='display:" + sStyle + ";'" +
				 "     ID=T_" + CatIDStr + 
				 "     onClick=" + char34 + "window.event.cancelBubble=true;" + char34 + ">" +
				 "<DIV STYLE='margin-left:12;'><FONT SIZE=1><!--" + CatIDStr + "-->" + "</DIV>" +
				 "</DIV></DIV>" + SubStr;
		hpStr = hpStr.replace(SubStr, SrcStr);	
	}
}

function addCategory2(CatIDStr, CatStr, defaultShow)
{
		sImg   = defaultShow? "none.gif" : "none.gif";
		sStyle = defaultShow? "black"     : "none";
	
	SubStr = "<!--CATEGORY_LINKS-->";
	if (hpStr.indexOf(SubStr) >= 0)
	{
		SrcStr = "<DIV STYLE='cursor:hand;'" +
				 "     ID=C_" + CatIDStr +
				 "     onClick=clickCategory2(" + char34 + CatIDStr + char34 + ") NOWRAP>" +
				 "<IMG SRC='./" + sImg + "' ALT='*'" +
				 "     ID=I_" + CatIDStr +
				 "     onClick=clickCategory2(" + char34 + CatIDStr + char34 + ") ALIGN=middle BORDER=0>&nbsp;" +
				 "<A STYLE='color:black;text-decoration:none;'" + 
				 "   HREF='noop' " + 
				 "   onfocus=" + char34 + "window.status='';" + char34 + 
				 "   onmouseover=" + char34 + "window.status='';" + char34 + 
				 "   onclick=" + char34 + "window.event.returnValue = false;" + char34 + ">" +
				 "<B>" + CatStr + "</B></A><BR>" +
				 "<DIV STYLE='display:" + sStyle + ";'" +
				 "     ID=T_" + CatIDStr + 
				 "     onClick=" + char34 + "window.event.cancelBubble=true;" + char34 + ">" +
				 "<DIV STYLE='margin-left:12;'><FONT SIZE=1><!--" + CatIDStr + "-->" + "</DIV>" +
				 "</DIV></DIV>" + SubStr;
		hpStr = hpStr.replace(SubStr, SrcStr);	
	}
}


function addCategoryLink(CatIDStr, CatStr, LinkUrl)
{
	SubStr  = "<!--" + CatIDStr + "-->";
	if (hpStr.indexOf(SubStr) >= 0)
	{
		SrcStr = "&nbsp;&nbsp;&nbsp;<A HREF='" + LinkUrl + "'><FONT COLOR=WHITE>" + CatStr + "</FONT></A><BR>" + SubStr;
		hpStr = hpStr.replace(SubStr, SrcStr);	
	}
}

function setTopLinkTitle(TitleStr)
{
	SubStr = "<!--TOP_LINKS-->";
	if (hpStr.indexOf(SubStr) >= 0)
	{
		SrcStr = "<B>" + TitleStr + "</B><BR><DIV STYLE='margin-left:12;'><!--TOP_LINK--></DIV>";
		hpStr = hpStr.replace(SubStr, SrcStr);	
	}
}

function addTopLink(LinkStr, LinkUrl)
{
	SubStr  = "<!--TOP_LINK-->";
	if (hpStr.indexOf(SubStr) >= 0)
	{
		SrcStr = "<A HREF='" + LinkUrl + "'>" + LinkStr + "</A><BR>" + SubStr;
		hpStr = hpStr.replace(SubStr, SrcStr);	
	}
}

function addStandardLink(TextStr, LinkStr, LinkUrl)
{
	SubStr = "<!--STANDARD_LINK-->";
	if (hpStr.indexOf(SubStr) >= 0)
	{
		SrcStr = TextStr;
		if (LinkStr != "")
		{
			x = TextStr.indexOf(LinkStr);
			if (x >= 0)
			{
				SrcStr = TextStr.substring(0, x);
				SrcStr += "<A HREF='" + LinkUrl + "'>" + LinkStr + "</A>";
			
				x += LinkStr.length;
				SrcStr += TextStr.substring(x);
			}
		}
		SrcStr += "<BR><BR>" + SubStr;
		hpStr = hpStr.replace(SubStr, SrcStr);	
	}
}

function addCopyRightMsg(MsgStr, MsgUrl)
{
	SubStr = "<!--COPYRIGHT-->";
	SrcStr = "";
	if (FirstCRMsg)
	{
		SrcStr = "&#169;";
		FirstCRMsg = false;
	}
	if (MsgUrl == "")
		SrcStr += MsgStr;
	else
		SrcStr += "<A HREF='" + MsgUrl + "'>" + MsgStr + "</A>";
	SrcStr += SubStr;
	hpStr = hpStr.replace(SubStr, SrcStr);	
}

function setTopStory(HeadlineStr, StoreStr, LinkUrl, Gif, GifAltStr)
{
	SrcStr = "<A HREF='" + LinkUrl + "'><IMG SRC='" + Gif + "' ALIGN=LEFT WIDTH=117 HEIGHT=85 ALT=" + char34 + GifAltStr + char34 + " BORDER=0></A>";
	hpStr = hpStr.replace("<!--TOP_BANNER-->", SrcStr);	

	SrcStr = "<A HREF='" + LinkUrl + "'><B>" + HeadlineStr + "</B></A><BR>" + StoreStr;
	hpStr = hpStr.replace("<!--TOP_STORY-->", SrcStr);	
}

function setHeadlineTitle(TitleStr)
{
	SubStr = "<!--HEADLINE_TITLE-->";
	if (hpStr.indexOf(SubStr) >= 0)
	{
		SrcStr = "<B>" + TitleStr + "</B><BR><BR>";
		hpStr = hpStr.replace(SubStr, SrcStr);	
	}
}

function setHeadline(placementNo, HeadlineStr, LinkUrl)
{
	if (placementNo < 1 || placementNo > 6) return

	SubStr = "<!--BULLET_" + placementNo + "-->";
	SrcStr = "<IMG SRC='./bluebullet.gif' ALT='*' WIDTH=7 HEIGHT=10>";
	hpStr = hpStr.replace(SubStr, SrcStr);	

	SubStr = "<!--HEADLINE_" + placementNo + "-->";
	SrcStr = "<B><A HREF='" + LinkUrl + "'>" + HeadlineStr + "</B></A>";
	hpStr = hpStr.replace(SubStr, SrcStr);	
}

function setPromotion(placementNo, HeadlineStr, StoreStr, LinkUrl, Gif, GifAltStr)
{
	if (placementNo < 1 || placementNo > 2) return

	SubStr = "<!--PROMO_BANNER_" + placementNo + "-->";
	SrcStr = "<A HREF='" + LinkUrl + "'><IMG SRC='" + Gif + "' ALIGN=LEFT ALT=" + char34 + GifAltStr + char34 + " BORDER=0></A>";
	hpStr = hpStr.replace(SubStr, SrcStr);	
	
	SubStr = "<!--PROMO_MSG_" + placementNo + "-->";
	SrcStr = "";
	if (HeadlineStr != "") SrcStr += "<A HREF='" + LinkUrl + "'><B>" + HeadlineStr + "</B></A><BR>";
	if (StoreStr    != "") SrcStr += StoreStr;
	hpStr = hpStr.replace(SubStr, SrcStr);	
}

function setLastUpdate(TextStr)
{
	hpStr = hpStr.replace("<!--LASTUPDATE-->", TextStr);	
}

function goHomePage(s)
{	
	//window.location.href = s.options[s.selectedIndex].value;
	
	option = s.options[s.selectedIndex].value;
	elmID = "ID_HPLink" + option
	obj = document.all(elmID);
	if (obj != null)
		obj.click();
}

function clickCategory(CatIDStr) 
{
	var txtObj = document.all("T_" + CatIDStr);
	var imgObj = document.all("I_" + CatIDStr);

	if (txtObj.style.display == 'none') 
	{
		txtObj.style.display = '';
		imgObj.src = './minus.gif';
	}
	else 
	{
		txtObj.style.display = 'none';
		imgObj.src = './plus.gif';
	}
	window.event.cancelBubble=true;
}

function clickCategory2(CatIDStr) 
{
	var txtObj = document.all("T_" + CatIDStr);
	var imgObj = document.all("I_" + CatIDStr);

	if (txtObj.style.display == 'none') 
	{
		txtObj.style.display = '';
		imgObj.src = './none.gif';
	}
	else 
	{
		txtObj.style.display = 'none';
		imgObj.src = './none.gif';
	}
	window.event.cancelBubble=true;
}


function LineBreak()
{
	SubStr = "<!--CATEGORY_LINKS-->";
	SrcStr = "&nbsp;";
	hpStr = hpStr.replace(SubStr, SrcStr);	
}