/***Vars and functions for menu***/
	
	//vars for current header and menu
	var activeHeader = null;
	var activeMenu = null;
	
	//Sets the current header and menu
	function dsetMenu(menuHeaderID,menuID)
	{
		var top = 0;
		var left = 0;
		var currentEle;
		
		if(document.all)
		{
			if(activeHeader != null && activeMenu != null)
			{
				if(activeMenu.style.visibility != 'hidden')
				{
					dmenuHide();
				}
			}
		
			activeHeader = eval("document.all('" + menuHeaderID + "');");
			activeMenu = eval("document.all('" + menuID + "');");
			
			currentEle = activeHeader;
				
			//Find the top and left of header and its parent elements
			while(currentEle.tagName.toLowerCase() != 'body')
			{
				top += currentEle.offsetTop +2 ;
				left += currentEle.offsetLeft ;
				currentEle = currentEle.offsetParent;
			}
			
			//Add the width of the header and the width of extra cell
			//at the end.
			//left += (activeHeader.offsetWidth + 43);
			left -= 15;
			activeMenu.style.left = left;
			activeMenu.style.top = top;
			
			dmenuShow();
			
			event.cancelBubble = true;
		}
	}
	
	//Show the current menu
	function dmenuShow()
	{
		if(document.all)
		{
			//activeHeader.className = 'over';
			activeMenu.style.visibility = 'visible';
		}
	}
	
	//Hide the current menu
	function dmenuHide()
	{
		if(document.all)
		{
			//activeHeader.className = 'norm';
			activeMenu.style.visibility = 'hidden';
		}
	}
	
	//Hide the current menu and reset vars
	//if the moved to element is not contained
	//within the menu.
	function dhideMenu()
	{
		if(document.all)
		{
			if(activeHeader != null && activeMenu != null)
			{
				//Check if the "moved to" element is not 
				//contained within activeMenu.
				if(!activeMenu.contains(event.toElement)) 
				{
					activeMenu.style.visibility = 'hidden';
					//activeHeader.className = 'norm';
					activeHeader = null;
					activeHeader = null;
				}
			}
		}
	}


/***********************************************************
 Global caps function. - Use g_bc in all pages to access the browser info
/***********************************************************/
function globalCaps(){
	var A=navigator.userAgent, t=true, p="", v="";
	p=A.indexOf("MSIE");
	if (p!=-1){
    	this.ie=true;
		v=A.charAt(p+5);
		(v=="2")?this.ie2=true:this.ie2=false;
		(v=="3")?this.ie3=true:this.ie3=false;
		(v=="4")?this.ie4=true:this.ie4=false;
		(v=="5")?this.ie5=true:this.ie5=false;
	} else {
		this.ie=false;
		this.ie2=false;
		this.ie3=false;
		this.ie4=false;
		this.ie5=false;	
	}
	(this.ie4||this.ie5)?this.IE4RelOrNewer=true:this.IE4RelOrNewer=false;
	(A.indexOf("Mozilla") != -1 && A.indexOf("compatible")==-1)?this.nav=true:this.nav=false;
	(A.indexOf("Windows 95")>0||A.indexOf("Win95")!=-1||A.indexOf("Win98")!=-1||A.indexOf("Windows 98")!=-1||A.indexOf("Windows NT")!=-1)?this.win32=true:this.win32=false;
	(A.indexOf("Windows 3.1")!=-1||A.indexOf("Win16")!=-1)?this.win16=true:this.win16=false;
	(A.indexOf("Mac")!=-1)?this.anymac=true:this.anymac=false;
	(A.indexOf("SunOS")!=-1||A.indexOf("HP-UX")!=-1||A.indexOf("X11")!=-1)?this.unix=true:this.unix=false;
	(A.indexOf("Windows CE")!=-1)?this.wince=true:this.wince=false;
}

/***************************************
 Global browser info object
/***************************************/
var gbc=new globalCaps();

function RaiseButton(){ }

function DepressButton(){ }

function HideButton(){ }

function MakeBGBlue() { }

function MakeBGWhite(oRegion) { }

function ToolbarRed() { }

function ToolbarWhite() { }

function HideErrors(){ }

function doMenu() { }

function hideMenu(oItem){ }

function keepMenu(){ }

function doHighlight(oItem){ }

function doUnHighlight(oItem){ }

function cancelBubble(){ }

function doDepress(oItem){ }

function changeHome(){ }

function writeWinFamilyMenu(){ }

function writeFamilyMenuItem(strID, strHREF, strTitle, strText, bDash){ }

function btnUp(oFrom){ }

function btnHide(oFrom){ }

function btnDown(oFrom){ }

function btnHideChosen(oFrom){ }
