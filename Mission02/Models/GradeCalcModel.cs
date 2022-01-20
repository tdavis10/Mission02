using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission02.Models
{
    public class GradeCalcModel
    {   
        [Required]
        [Range(0, 100)]
        public float Assignment { get; set; }
        [Range(0, 100)]
        public float Group { get; set; }
        [Range(0, 100)]
        public float Quizzes { get; set; }
        [Range(0, 100)]
        public float Exams { get; set; }
        [Range(0, 100)]
        public float Intex { get; set; }
    }
}
