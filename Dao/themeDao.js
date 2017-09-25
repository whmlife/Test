var themeDao=require("../Dao/theme");
var docs=[
{id:"0",title:"戴妃行宫",theme:"欧洲文艺会馆",style:"时尚经典",txt:"深处行宫的戴妃，与最深爱的人共同谱写最美的篇章",
img:"/DaoImg/1.jpg,/DaoImg/2.jpg,/DaoImg/3.jpg,/DaoImg/4.jpg,/DaoImg/5.jpg,/DaoImg/6.jpg,/DaoImg/7.jpg,/DaoImg/4.jpg"},
{id:"1",title:"天生一对",theme:"未知",style:"法式轻奢",txt:"",
img:"/DaoImg/tian1.jpg,/DaoImg/tian2.jpg,/DaoImg/tian3.jpg,/DaoImg/tian4.jpg,/DaoImg/tian5.jpg,/DaoImg/tian6.jpg,/DaoImg/tian7.jpg,/DaoImg/tian8.jpg"},
{id:"2",title:"浪漫约会",theme:"未知",style:"韩式精致",txt:"",
img:"/DaoImg/man1.jpg,/DaoImg/man2.jpg,/DaoImg/man3.jpg,/DaoImg/man4.jpg,/DaoImg/man5.jpg,/DaoImg/man6.jpg,/DaoImg/man7.jpg,/DaoImg/man8.jpg"},
{id:"3",title:"丛林物语",theme:"未知",style:"韩式精致",txt:"",
img:"/DaoImg/tree1.jpg,/DaoImg/tree2.jpg,/DaoImg/tree3.jpg,/DaoImg/tree4.jpg,/DaoImg/tree5.jpg,/DaoImg/tree6.jpg,/DaoImg/tree7.jpg,/DaoImg/tree8.jpg"},
{id:"4",title:"漫步时光",theme:"欧洲文艺会馆",style:"时尚经典",txt:"深处行宫的戴妃，与最深爱的人共同谱写最美的篇章",
img:"/DaoImg/1.jpg,/DaoImg/2.jpg,/DaoImg/3.jpg,/DaoImg/4.jpg,/DaoImg/5.jpg,/DaoImg/6.jpg,/DaoImg/7.jpg,/DaoImg/4.jpg"},
{id:"5",title:"漫天花语",theme:"未知",style:"法式轻奢",txt:"",
img:"/DaoImg/tian1.jpg,/DaoImg/tian2.jpg,/DaoImg/tian3.jpg,/DaoImg/tian4.jpg,/DaoImg/tian5.jpg,/DaoImg/tian6.jpg,/DaoImg/tian7.jpg,/DaoImg/tian8.jpg"},
{id:"6",title:"情深似海",theme:"未知",style:"韩式精致",txt:"",
img:"/DaoImg/man1.jpg,/DaoImg/man2.jpg,/DaoImg/man3.jpg,/DaoImg/man4.jpg,/DaoImg/man5.jpg,/DaoImg/man6.jpg,/DaoImg/man7.jpg,/DaoImg/man8.jpg"},
{id:"7",title:"梦中婚礼",theme:"未知",style:"韩式精致",txt:"",
img:"/DaoImg/tree1.jpg,/DaoImg/tree2.jpg,/DaoImg/tree3.jpg,/DaoImg/tree4.jpg,/DaoImg/tree5.jpg,/DaoImg/tree6.jpg,/DaoImg/tree7.jpg,/DaoImg/tree8.jpg"},
{id:"8",title:"海天之恋",theme:"欧洲文艺会馆",style:"时尚经典",txt:"深处行宫的戴妃，与最深爱的人共同谱写最美的篇章",
img:"/DaoImg/1.jpg,/DaoImg/2.jpg,/DaoImg/3.jpg,/DaoImg/4.jpg,/DaoImg/5.jpg,/DaoImg/6.jpg,/DaoImg/7.jpg,/DaoImg/4.jpg"},
{id:"9",title:"完美假期",theme:"未知",style:"法式轻奢",txt:"",
img:"/DaoImg/tian1.jpg,/DaoImg/tian2.jpg,/DaoImg/tian3.jpg,/DaoImg/tian4.jpg,/DaoImg/tian5.jpg,/DaoImg/tian6.jpg,/DaoImg/tian7.jpg,/DaoImg/tian8.jpg"}
];
themeDao.insertDocs(docs,function(result){
	console.log(result);
});