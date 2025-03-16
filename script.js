var q = 1;

function proccess(a)
{
    if(q==1)
    {
        if(a==1)
        {
            right()
        }else
        {
            wrong()
        }
    }
}

function right()
{
    alert("Well done, you chose the correct answer")
}
function wrong()
{
    alert("Your answer is incorrect, try again")
}