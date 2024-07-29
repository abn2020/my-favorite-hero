import { useEffect, useMemo, useState } from "react";
import api from "../../services/api";
import Header from "../Header";
import {
  Container,
  CardHero,
  ImgHero,
  Main,
  ContainerSelect,
  TextCard,
  CardHeroItens,
  ContainerInput,
  TextField,
  Label,
  ButtonModal,
  ButtonFavoriteHero,
  ContainerPagination,
  ButtonPagination
} from "./styles";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Loading from "../../components/Loader";
import Modal from "../../components/Modal";
import RowsPerPage from "../../components/RowsPerPage";
import Eye from "../../assets/eye.svg";
import Details from "./details";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [description, setDescription] = useState("");
  const [comics, setComics] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    api
      .get(`/characters?`)
      .then((response) => {
        toast.success("Dados carregados!");
        setCharacters(response.data.data.results);
      })
      .catch((e) => console.log(e));
  }, []);

  const rowsPerPage = (data) => {
    setItensPerPage(data)
  }


  useEffect(() => {
    setFavorites(characters);
  }, [characters]);


  

  const handleOpenModal = (description, comics) => {
    setComics(comics)
    setDescription(description)
    setOpenModal(true)
  }

  function handleFavorite(id) {
    const newFavorites = favorites.map(item => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

  const filterCharacters = useMemo(
    () =>
      favorites?.filter((names) =>
        names.name.toLowerCase().includes(searchName?.toLowerCase())
      ),
    [favorites, searchName]
  );

  const pages = Math.ceil(characters.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = filterCharacters.slice(startIndex, endIndex)
  

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage])

  return (
    <>
    <Header favorites={favorites} />

    <Main>
      {characters?.length > 0 ? (
        <>
          <ContainerInput>
            <Label>Search your hero</Label>
            <TextField
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </ContainerInput>
          <Container>
            {currentItens?.map((characters, key) => (
              <CardHero key={key}>
                <CardHeroItens>
                  <ImgHero
                    src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
                    alt="Imagem heroi"
                  />
                  <TextCard>
                  <div>
                    <ButtonFavoriteHero
                      onClick={() => {
                        handleFavorite(characters.id);
                      }}
                      favorite={characters.favorite}
                    >
                      {characters.favorite == true ? <div> - To remove </div> : <div> + To add </div>}
                    </ButtonFavoriteHero>
                  </div>
                  <div>
                    {characters.name}
                  </div>
                    <div>
                        <ButtonModal onClick={() => handleOpenModal(characters.description, characters.comics)}>
                            About
                            <img src={Eye} alt="Icone button" />
                        </ButtonModal>
                    </div>
                  </TextCard>
                </CardHeroItens>
              </CardHero>
            ))}
          </Container>
          <ContainerSelect>
            <RowsPerPage 
                limit={itensPerPage}
                onChange={rowsPerPage}
                options={[
                    {
                      value: 10,
                      selected: true,
                    },
                    {
                      value: 20,
                    },
                    {
                      value: 30,
                    },
                    {
                      value: 40,
                    },
                ]}
            />
            <ContainerPagination>
              {Array.from(Array(pages), (item, index) => {
                return ( <ButtonPagination style={index === currentPage ? { backgroundColor: 'gray' } : null } key={item} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))} >{index + 1}</ButtonPagination> )
              })}
            </ContainerPagination>
          </ContainerSelect>
          
        </>
      ) : (
        <Loading />
      )}
      <ToastContainer />
      <Modal isOpen={openModal} title={"About this hero"} setModalOpen={() => setOpenModal(!openModal)}>
        <Details  description={description}  comics={comics} />
      </Modal>
    </Main>
    </>
  );
};

export default Characters;
