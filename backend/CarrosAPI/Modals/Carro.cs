using CarrosAPI.Enums;
using System.ComponentModel.DataAnnotations;

namespace CarrosAPI.Modals
{
    public class Carro

    {
        [Key]
        [Required]
        public int Id { get; set; }
        [Required (ErrorMessage = "O campo 'Modelo' é obrigatório")]
        public string Modelo { get; set; }
        [Required(ErrorMessage = "O campo 'Marca' é obrigatório")]
        public string Marca { get; set; }
        [Required(ErrorMessage = "O campo 'Quantidade de portas' é obrigatório")]
        public int QuantidadePortas { get; set; }
        [Required(ErrorMessage = "O campo 'Tipo de câmbio' é obrigatório")]
        public CambioEnum TipoCambio { get; set; }
        [Required(ErrorMessage = "O campo 'Ano de fabricação' é obrigatório")]
        public int AnoFabricado { get; set; }
        [Required(ErrorMessage = "O campo 'Tipo de combustível' é obrigatório")]
        public CombustivelEnum TipoCombustivel { get; set; }

    }
}
