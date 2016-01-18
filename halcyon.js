var repeat=1;var title=document.title;
var leng=title.length;
var start=1;
var Message="Siddaganga Institute of Technology :: Halcyon 2010 :: ";
var place=1;
function titlemove()
{
	titl=title.substring(start, leng) + title.substring(0, start);
	document.title=titl;start++;
	if (start==leng+1)
	{
		start=0;
		if (repeat==0)return;
		}
		setTimeout("titlemove()",140);
		}
		if (document.title) titlemove();
function scrollIn()
{
  window.status=Message.substring(0, place);
  if (place >= Message.length)
  {
	place=Message.length;window.setTimeout("scrollOut()",800);
  }
  else
  {
	place++;window.setTimeout("scrollIn()",50);
  }
}
function scrollOut()
{
	window.status=Message.substring(0, place);
	if (place >= 0)
	{
		place--;
		window.setTimeout("scrollOut()", 50);
	}
	else
	{
		place++;
		window.setTimeout("scrollIn()", 100);
	}
}
scrollIn()