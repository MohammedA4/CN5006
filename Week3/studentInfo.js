const dateofBirth= "02/04/2004"

const getStudentName = () =>{
    return "Mo"
}

const getCampusName = () =>{
    return "Docklands"
}

exports.getName=getStudentName
exports.Location=getCampusName
exports.db=dateofBirth

exports.grades=Studentgrade = (marks) =>
{
    if (marks < 50 && marks < 70){
        return "B Grade"
    }
    else{
        return "A Grade"
    }
}

