using AutoMapper;
using CarrosAPI.Data.DTO;
using CarrosAPI.Modals;

namespace CarrosAPI.Profiles
{
    public class CarroProfile : Profile
    {
        public CarroProfile()
        {
            CreateMap<CreateCarroDto, Carro>();
            CreateMap<Carro, ReadCarroDto>();
            CreateMap<UpdateCarroDto, Carro>();

        }

    }
}
