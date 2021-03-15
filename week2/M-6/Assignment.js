var s = "BhavanaBetheBest";
var ch = "B"
if (s!= null) {
    console.log(s, CountB(s))
    console.log(s, ch, countChar(s, ch))
} 
function CountB(s)
{
    var count = 0
    var i
    for(i = 0; i < s.length; i++)
    {
        if(s[i] === 'B')
        {
            count = count+1
        }
    }
    return count
}
function countChar(s, ch)
{
    var count = 0
    var i
    for(i = 0; i < s.length; i++)
    {
        if(s[i] === ch)
        {
            count = count+1
        }
    }
    return count
}