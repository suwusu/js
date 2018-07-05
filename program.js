//1.注意write()方法不会在每个语句后面新增一行
document.write("Hello World!");
document.writeln("Have a nice day!");

//注意writeln()方法在每个语句后面新增一行
document.writeln("Hello World!");
document.writeln("Have a nice day!");


//2.NaN不等于任何值，包括它自己


//3.字符串是不可变的。一旦字符串被创建，就永远无法改变它。
//但你可以很容易地通过+运算符连接其他字符串来创建一个新字符串。
//两个包含着完全相同的字符且字符顺序也相同的字符串被认为是相同的字符串
//'c' + 'a' + 't' === 'cat' 为true


//4.下面的值为假：false、null、undefined、空字符串''、数字0、数字NaN


//5.for in 循环中通常你需要检测object.hasOwnProperty(variable)来确定
//这个属性名是该对象的成员，还是来自于原型链
