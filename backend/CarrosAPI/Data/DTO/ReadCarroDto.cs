

using System;
using System.ComponentModel.DataAnnotations;

namespace CarrosAPI.Data.DTO
{
    public class ReadCarroDto
    {


        public string Modelo { get; set; }
        [Required(ErrorMessage = "O campo 'Marca' é obrigatório")]
        public string Marca { get; set; }
        [Required(ErrorMessage = "O campo 'Quantidade de portas' é obrigatório")]
        public int QuantidadePortas { get; set; }
        [Required(ErrorMessage = "O campo 'Tipo de câmbio' é obrigatório")]
        public string TipoCambio { get; set; }
        [Required(ErrorMessage = "O campo 'Ano de fabricação' é obrigatório")]
        public int AnoFabricado { get; set; }
        [Required(ErrorMessage = "O campo 'Tipo de combustível' é obrigatório")]
        public string TipoCombustivel { get; set; }

        [Required(ErrorMessage = "O campo 'Tipo de combustível' é obrigatório")]
        public DateTime MomentoConsulta { get; set; }
    }
}
