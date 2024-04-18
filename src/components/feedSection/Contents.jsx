import React, { useState } from "react";
import styled from "styled-components";
import AudioCard from "../card/Audiocard";

const contentsData = {
  life: [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
  ],
  travel: [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
  ],
  culture: [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
  ],
  it: [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
  ],
  sports: [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
  ],
  current: [
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Halsey_-_Badlands.png",
      category: "NEW FOR YOU",
      title: "My New Arrivals",
      writer: "Deine Freunde, Moderat",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSlthi3Ss3fmc4HgzkrL-5HfDLfdZFvW8N2o9omKXNXNJu-RxVU",
      category: "NEW TRACK FOR YOU",
      title: "Coexist",
      writer: "Album by the XX",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTMATmyeAAbmMBWQl7k9Sy3q_xCz9-NimlzHygS5k4xov9yyiqA",
      category: "NEW ALBUM",
      title: "After Hours",
      writer: "The Weekend",
      tag: "# Tag1",
    },
    {
      imageUrl:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRjlUhv8Nek6yMkzivUQFT8pdJ0qjdzfD6oswjgnKgGn-L92cBK",
      category: "BASED ON YOUR LIKES",
      title: "If You Wait",
      writer: "London Grammar",
      tag: "# Tag1",
    },
  ],
};

const Contents = () => {
  const [activeCategory, setActiveCategory] = useState("life");
  const [sortOrder, setSortOrder] = useState("popular");
  const [contentData, setContentData] = useState(contentsData[activeCategory]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setContentData(contentsData[category]);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };
  return (
    <ContentsWrapper>
      <Title>콘텐츠</Title>
      <SelectContainer>
        <Categories>
          {Object.keys(contentsData).map((category) => (
            <CategoryButton
              key={category}
              active={activeCategory === category}
              onClick={() => handleCategoryClick(category)}
            >
              {category === "life"
                ? "라이프"
                : category === "travel"
                ? "여행"
                : category === "culture"
                ? "문화"
                : category === "it"
                ? "IT"
                : category === "sports"
                ? "스포츠"
                : "시사"}
            </CategoryButton>
          ))}
        </Categories>
        <SortSelect value={sortOrder} onChange={handleSortOrderChange}>
          <option value="popular">인기순</option>
          <option value="recent">최신순</option>
        </SortSelect>
      </SelectContainer>
      <CardsContainer>
        {contentData.map((data, index) => (
          <AudioCard key={index} {...data} />
        ))}
      </CardsContainer>
    </ContentsWrapper>
  );
};

export default Contents;

const ContentsWrapper = styled.div`
  margin: 250px auto;
  max-width: 1400px;
`;

const Title = styled.h2`
  font-size: 50px;
  font-weight: bold;
  text-align: left;
  color: #000000;
  width: 100%;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Categories = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const CategoryButton = styled.button`
  background: none;
  border: none;
  border-bottom: ${(props) => (props.active ? "2px solid black" : "none")};
  color: #000;
  cursor: pointer;
  padding: 10px 20px;
  margin: 30px 10px;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  font-size: 20px;
`;

const SortSelect = styled.select`
  padding: 5px;
  border: none;
  background: transparent;
  font-weight: bold;
  font-size: 20px;
  color: #000;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
