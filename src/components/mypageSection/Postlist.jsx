import ListCard from "../card/Listcard";

const Postlist = ({ postList, userLink }) => {
  const postData = [
    {
      title: "고양이",
      content:
        "고양이(Felis catus)는 포유류 동물이다. 고양이의 신체적 특성과 습성은 다른 고양이과 동물들과 동일하여 빠른 반사신경, 탁월한 유연성, 날카로운 이빨, 넣고 꺼낼 수 있는 발톱 등이 있다.",
      tags: [
        "# 고양이1",
        "# 나만없어고양이",
        "# 꽁꽁얼어붙은한강위로고양이가걸어다닙니다",
      ],
      date: "2024.03.19",
      likes: 10,
      comments: 5,
      thumbnail:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRJntz_XPFv_S8YYjqI4N_DCgIPdrO47NIOTwPK1qFY-p-Enhh",
      audioSrc: "https://youtu.be/sRmbrE6eHpU?si=4ywvHI8tAc049nkZ",
    },
    {
      title: "고양이",
      content:
        "고양이(Felis catus)는 포유류 동물이다. 고양이의 신체적 특성과 습성은 다른 고양이과 동물들과 동일하여 빠른 반사신경, 탁월한 유연성, 날카로운 이빨, 넣고 꺼낼 수 있는 발톱 등이 있다.",
      tags: [
        "# 고양이1",
        "# 나만없어고양이",
        "# 꽁꽁얼어붙은한강위로고양이가걸어다닙니다",
      ],
      date: "2024.03.19",
      likes: 10,
      comments: 5,
      thumbnail:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRJntz_XPFv_S8YYjqI4N_DCgIPdrO47NIOTwPK1qFY-p-Enhh",
      audioSrc: "https://youtu.be/sRmbrE6eHpU?si=4ywvHI8tAc049nkZ",
    },
    {
      title: "고양이",
      content:
        "고양이(Felis catus)는 포유류 동물이다. 고양이의 신체적 특성과 습성은 다른 고양이과 동물들과 동일하여 빠른 반사신경, 탁월한 유연성, 날카로운 이빨, 넣고 꺼낼 수 있는 발톱 등이 있다.",
      tags: [
        "# 고양이1",
        "# 나만없어고양이",
        "# 꽁꽁얼어붙은한강위로고양이가걸어다닙니다",
      ],
      date: "2024.03.19",
      likes: 10,
      comments: 5,
      thumbnail:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRJntz_XPFv_S8YYjqI4N_DCgIPdrO47NIOTwPK1qFY-p-Enhh",
      audioSrc: "https://youtu.be/sRmbrE6eHpU?si=4ywvHI8tAc049nkZ",
    },
    {
      title: "고양이",
      content:
        "고양이(Felis catus)는 포유류 동물이다. 고양이의 신체적 특성과 습성은 다른 고양이과 동물들과 동일하여 빠른 반사신경, 탁월한 유연성, 날카로운 이빨, 넣고 꺼낼 수 있는 발톱 등이 있다.",
      tags: [
        "# 고양이1",
        "# 나만없어고양이",
        "# 꽁꽁얼어붙은한강위로고양이가걸어다닙니다",
      ],
      date: "2024.03.19",
      likes: 10,
      comments: 5,
      thumbnail:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRJntz_XPFv_S8YYjqI4N_DCgIPdrO47NIOTwPK1qFY-p-Enhh",
      audioSrc: "https://youtu.be/sRmbrE6eHpU?si=4ywvHI8tAc049nkZ",
    },
    {
      title: "고양이",
      content:
        "고양이(Felis catus)는 포유류 동물이다. 고양이의 신체적 특성과 습성은 다른 고양이과 동물들과 동일하여 빠른 반사신경, 탁월한 유연성, 날카로운 이빨, 넣고 꺼낼 수 있는 발톱 등이 있다.",
      tags: [
        "# 고양이1",
        "# 나만없어고양이",
        "# 꽁꽁얼어붙은한강위로고양이가걸어다닙니다",
      ],
      date: "2024.03.19",
      likes: 10,
      comments: 5,
      thumbnail:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRJntz_XPFv_S8YYjqI4N_DCgIPdrO47NIOTwPK1qFY-p-Enhh",
      audioSrc: "https://youtu.be/sRmbrE6eHpU?si=4ywvHI8tAc049nkZ",
    },
    {
      title: "고양이",
      content:
        "고양이(Felis catus)는 포유류 동물이다. 고양이의 신체적 특성과 습성은 다른 고양이과 동물들과 동일하여 빠른 반사신경, 탁월한 유연성, 날카로운 이빨, 넣고 꺼낼 수 있는 발톱 등이 있다.",
      tags: [
        "# 고양이1",
        "# 나만없어고양이",
        "# 꽁꽁얼어붙은한강위로고양이가걸어다닙니다",
      ],
      date: "2024.03.19",
      likes: 10,
      comments: 5,
      thumbnail:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSRJntz_XPFv_S8YYjqI4N_DCgIPdrO47NIOTwPK1qFY-p-Enhh",
      audioSrc: "https://youtu.be/sRmbrE6eHpU?si=4ywvHI8tAc049nkZ",
    },
  ];
  return (
    <div>
      {postList.map((post, index) => (
        <ListCard
          key={index}
          title={post.title}
          content={post.thumbnail}
          tags={post.tagList}
          date={post.createdTime}
          likes={post.likeCnt}
          comments={post.comments}
          thumbnail={post.thumbnailImageUrl}
          audioSrc={post.postVoiceFileUrl}
          userLink={userLink}
          id={post.personalPostId}
        />
      ))}
    </div>
  );
};

export default Postlist;
