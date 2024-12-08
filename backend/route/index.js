const express = require('express')
const router = express.Router();



router.get('/GetResult/:id', async (req, res) => {
    const sid = req.params.id;
    console.log("Received ID:", sid);

    const sql1 = `
        SELECT * 
        FROM student 
        JOIN grades ON student.IndexNumber = grades.IndexNumber
        JOIN subjects ON subjects.SubjectID = grades.SubjectID
        WHERE student.IndexNumber = ?`;

    req.db.query(sql1, [sid], (err, result) => {
        try {
            if (err) {
                console.error("Error executing query: ", err);
                return res.status(500).json({ success: false, message: "Database error" });
            } else {
                if (result.length === 0) {
                    return res.status(404).json({ success: false, message: "Invalid Index. Please enter correct index" });
                }
                return res.status(200).json({ success: true, data: result });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ success: false, message: "Server Error" });
        }
    });
});

router.post('/FindIndex',(req,res)=>{
    const Nic = req.body.Nic;
    const sql = 'select IndexNumber from student where NICNumber = ?'
    req.db.query(sql,[Nic],(err,result)=>{
        try{
            if(err){
                console.error("Error executing query: ", err);
                return res.status(500).json({ success: false, message: "Database error" });
            }
            if(result.length === 0){
                return res.status(200).json({ success: false, message: "Student Not found with this Nic" }); 
            }
            return res.status(200).json({ success: true, data: result });
        }catch(err){
            console.log(err);
            return res.status(500).json({succuess:false, message:"Servor error"})
        }
    })
})



module.exports = router;