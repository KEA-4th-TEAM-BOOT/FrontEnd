import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserProfileState } from "../../recoil/user";

const CategoryEdit = () => {
  const userInfo = useRecoilValue(UserProfileState);
  const [categories, setCategories] = useState([]);
  const setUserInfo = useSetRecoilState(UserProfileState);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    if (userInfo) {
      // categoryList 내용 출력
      const categoryList = userInfo.categoryList;
      if (categoryList && Array.isArray(categoryList)) {
        setCategories(userInfo.categoryList);
        categoryList.forEach((category, index) => {
          console.log(`Category ${index + 1}:`);
          console.log(`  ID: ${category.categoryId}`);
          console.log(`  Name: ${category.categoryName}`);
          console.log(`  Exist SubCategory: ${category.existSubCategory}`);
          console.log(`  Count: ${category.count}`);
          console.log(
            `  SubCategoryList: ${JSON.stringify(
              category.subCategoryList,
              null,
              2
            )}`
          );
        });
      } else {
        console.log("categoryList is not an array or is null");
      }
    }
  }, [userInfo]);

  const handleCategoryNameChange = (index, newName) => {
    const newCategories = categories.map((category, i) => {
      if (i === index) {
        return { ...category, categoryName: newName };
      }
      return category;
    });
    setCategories(newCategories);
    setUserInfo((prev) => ({ ...prev, categoryList: newCategories }));
  };

  const addCategory = () => {
    const newCategoryId = (categories.length + 1).toString();
    const newCategory = {
      categoryId: newCategoryId,
      categoryName: `카테고리 ${newCategoryId}`,
      count: 0,
    };
    const newCategories = [...categories, newCategory];
    setCategories(newCategories);
    setUserInfo((prev) => ({ ...prev, categoryList: newCategories }));
  };

  const deleteCategory = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
    setUserInfo((prev) => ({ ...prev, categoryList: newCategories }));
    setIsModalOpen(false);
  };

  const renderCategoryItem = (category, index) => {
    const isEditing = editingIndex === index;

    return (
      <CategoryListItem
        key={index}
        isEditing={isEditing}
        onClick={() => {
          setEditingIndex(index);
        }}
      >
        <CategoryName isEditing={isEditing}>
          {isEditing ? (
            <EditableText
              value={category.categoryName}
              onChange={(e) => handleCategoryNameChange(index, e.target.value)}
              onBlur={() => setEditingIndex(null)}
              autoFocus
            />
          ) : (
            category.categoryName
          )}
        </CategoryName>
        <PostCount>({category.count})</PostCount>
        <DeleteBtn
          onClick={(e) => {
            e.stopPropagation();
            setSelectedCategoryId(index);
            setIsModalOpen(true);
          }}
        >
          삭제
        </DeleteBtn>
      </CategoryListItem>
    );
  };

  return (
    <CategoryEditContainer>
      <CategoryContainer>
        <ContainerHeader>
          <AddBtn onClick={addCategory}>+ 카테고리 추가</AddBtn>
        </ContainerHeader>

        <CategoryList>
          <Header>
            <MainCategoryTitle>카테고리 전체 보기</MainCategoryTitle>
            <TotalPosts>
              ({categories.reduce((sum, category) => sum + category.count, 0)})
            </TotalPosts>
          </Header>
          <Divider />
          {categories.map((category, index) =>
            renderCategoryItem(category, index)
          )}
        </CategoryList>
      </CategoryContainer>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <p>
              카테고리에 속한 글이 모두 삭제됩니다. 카테고리를 삭제하시겠습니까?
            </p>
            <ButtonContainer>
              <ModalButton onClick={() => deleteCategory(selectedCategoryId)}>
                삭제
              </ModalButton>
              <ModalButton onClick={() => setIsModalOpen(false)}>
                취소
              </ModalButton>
            </ButtonContainer>
          </ModalContent>
        </Modal>
      )}
    </CategoryEditContainer>
  );
};

export default CategoryEdit;

const CategoryEditContainer = styled.div``;

const CategoryContainer = styled.div`
  width: 350px;
`;

const AddBtn = styled.button`
  padding: 5px 10px;
  background-color: #66c0ff;
  color: white;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #e4f0ff;
    color: #66c0ff;
  }
`;

const Header = styled.div`
  display: center;
  margin-bottom: 10px;
  padding: 0 10px;
`;

const MainCategoryTitle = styled.span`
  font-size: 17px;
  font-weight: 400;
  margin-right: 8px;
  padding-left: 10px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #eee;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const TotalPosts = styled.span`
  font-size: 17px;
  color: #888;
`;

const ContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0px;
`;

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #ccc;
  padding: 10px 0;
`;

const CategoryListItem = styled.li`
  padding: 5px 20px 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-left: ${({ isSubCategory }) => (isSubCategory ? "30px" : "0")};
  background: ${({ isEditing }) => (isEditing ? "#e4f0ff" : "transparent")};
`;

const CategoryName = styled.span`
  font-size: 16px;
  margin-right: 10px;
  flex-grow: 1;
  margin-left: 10px;
  padding-left: 10px;
  background: ${({ isEditing }) => (isEditing ? "#fff" : "transparent")};
`;

const PostCount = styled.span`
  font-size: 16px;
  margin-left: 5px;
`;

const EditableText = styled.input`
  border: none;
  width: auto;
  outline: none;
  font-size: 16px;
  padding: 0;
  &:focus {
    outline: none;
  }
`;

const DeleteBtn = styled.button`
  padding: 5px 10px;
  background-color: #66c0ff;
  color: white;
  border: 1px solid #ccc;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #e4f0ff;
    color: #66c0ff;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #66c0ff;
  color: white;

  &:hover {
    background-color: #e4f0ff;
    color: #66c0ff;
  }
`;
