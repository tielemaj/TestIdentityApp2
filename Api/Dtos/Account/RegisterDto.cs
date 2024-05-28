using System.ComponentModel.DataAnnotations;

namespace Api.Dtos.Account
{
    public class RegisterDto
    {
        [Required]
        [StringLength(15, MinimumLength = 3, ErrorMessage = "Firstname must be at least {2}, mand maximum {1} characters")]
        public string FirstName { get; set; }
        [Required]
        [StringLength(15, MinimumLength = 3, ErrorMessage = "Lastname must be at least {2}, mand maximum {1} characters")]
        public string LastName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        [StringLength(15, MinimumLength = 6, ErrorMessage = "Pastword must be at least {2}, mand maximum {1} characters")]
        public string Password { get; set; }
    }
}