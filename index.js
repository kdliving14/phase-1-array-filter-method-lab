// Code your solution here

function findMatching(names, arg)
{
    //take array & string, returns array of matches (make it not case sensitive)
    const list = names.filter(function(word)
    {
        if(word.toLowerCase() === arg.toLowerCase())
        {return word;}  
    });
    return list;
}

function fuzzyMatch(names, arg)
{
    //take array & string, returns array of names that begin with provided arg
    const list = names.filter(function(word)
    {
        if(word.startsWith(arg))
        {
            return word;
        }  
    });
    return list;
}

function matchName(names, arg)
{
    //take array & string, return element whose name matches string
    const list = names.filter(function(word)
    {
        if(word.name === arg)
        {
            return word;
        }  
    });
    return list;
}