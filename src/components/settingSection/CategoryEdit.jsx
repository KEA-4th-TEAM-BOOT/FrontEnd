import { useState } from "react";
import styled from "styled-components";

const CategoryData = [
  { id: "1", name: "카테고리 1", postCount: 5, subCategories: [] },
  {
    id: "2",
    name: "카테고리 2",
    postCount: 4,
    subCategories: [
      { id: "2-1", name: "카테고리 2-1", postCount: 3 },
      { id: "2-2", name: "카테고리 2-2", postCount: 1 },
    ],
  },
  { id: "3", name: "카테고리 3", postCount: 3, subCategories: [] },
  {
    id: "4",
    name: "카테고리 4",
    postCount: 3,
    subCategories: [{ id: "4-1", name: "카테고리 4-1", postCount: 3 }],
  },
];

const CategoryEdit = () => {
  const [categories, setCategories] = useState(CategoryData);
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editingSubCategoryId, setEditingSubCategoryId] = useState(null);

  const handleCategoryNameChange = (id, newName) => {
    const newCategories = categories.map((category) => {
      if (category.id === id) {
        return { ...category, name: newName };
      } else if (category.subCategories) {
        const newSubCategories = category.subCategories.map((subCategory) =>
          subCategory.id === id
            ? { ...subCategory, name: newName }
            : subCategory
        );
        return { ...category, subCategories: newSubCategories };
      }
      return category;
    });
    setCategories(newCategories);
  };

  const renderEditableText = (id, name, postCount, isSubCategory = false) => {
    return (
      <EditableText
        value={name}
        onChange={(e) => handleCategoryNameChange(id, e.target.value)}
        onBlur={() => {
          setEditingCategoryId(null);
          setEditingSubCategoryId(null);
        }}
        autoFocus
      />
    );
  };

  const renderCategoryItem = (category, isSubCategory = false) => {
    const isEditing = isSubCategory
      ? editingSubCategoryId === category.id
      : editingCategoryId === category.id;

    return (
      <CategoryListItem
        key={category.id}
        isSubCategory={isSubCategory}
        isEditing={isEditing}
        onClick={() => {
          if (isSubCategory) {
            setEditingSubCategoryId(category.id);
          } else {
            setEditingCategoryId(category.id);
          }
        }}
      >
        <CategoryName isEditing={isEditing}>
          {isEditing ? (
            <EditableText
              value={category.name}
              onChange={(e) =>
                handleCategoryNameChange(category.id, e.target.value)
              }
              onBlur={() => {
                setEditingCategoryId(null);
                setEditingSubCategoryId(null);
              }}
              autoFocus
            />
          ) : (
            category.name
          )}
        </CategoryName>
        <PostCount>({category.postCount})</PostCount>
      </CategoryListItem>
    );
  };

  return (
    <CategoryEditContainer>
      <CategoryContainer>
        <ContainerHeader>
          <AddBtn>+ 카테고리 추가</AddBtn>
          <DeleteBtn>- 삭제</DeleteBtn>
        </ContainerHeader>

        <CategoryList>
          <Header>
            <MainCategoryTitle>카테고리 전체 보기</MainCategoryTitle>
            <TotalPosts>(15)</TotalPosts>
          </Header>
          <Divider />
          {categories.map((category) => [
            renderCategoryItem(category),
            category.subCategories &&
              category.subCategories.map((subCategory) =>
                renderCategoryItem(subCategory, true)
              ),
          ])}
        </CategoryList>
      </CategoryContainer>
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
