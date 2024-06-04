import React, { useState } from "react";
import styled from "styled-components";
import SearchCard from "../card/Searchcard";

const searchCardData = [
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
  {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlN5t3oVGJ8EYmu_Kal0xoYB33ayvauqpM29umopAuRuEA-Uwn",
    likes: true,
    likesCount: 120,
    commentsCount: 5,
    profileImg:
      "https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_3x2.jpg?wp=1&w=1084.125&h=721.875",
    title: "배가 고픈 이유",
    content:
      "스트레스는 배고픔을 유발하는 주요 원인 중 하나입니다. 스트레스를 받으면 우리 몸은 코르티솔이라는 호르몬을 분비하는데, 이 호르몬은 식욕을 증가 시키고 지방을 축적하는 역할을 합니다. 수면 부족도 배고픔을 유발하는 원인 중 하나입니다. 수면 부족으로 인해 혈당 수치가 감소하고, 호르몬 변화가 일어나며, 스트레스가 증가하기 때문입니다.",
    date: "2024.03.22",
    username: "고소미",
  },
];

const Searchlist = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredData = searchCardData.filter(
    (card) =>
      card.title.includes(searchQuery) ||
      card.content.includes(searchQuery) ||
      card.username.includes(searchQuery)
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <ListContainer>
      {paginatedData.length > 0 ? (
        paginatedData.map((card, index) => (
          <React.Fragment key={index}>
            <SearchCard
              thumbnail={card.imageUrl}
              title={card.title}
              content={card.content}
              date={card.date}
              profileImg={card.profileImg}
              username={card.username}
              likes={card.likes}
              likesCount={card.likesCount}
              commentsCount={card.commentsCount}
            />
            {index < paginatedData.length - 1 && <Divider />}
          </React.Fragment>
        ))
      ) : (
        <NoResults>검색 결과가 없습니다.</NoResults>
      )}
      {filteredData.length > itemsPerPage && (
        <Pagination>
          <ArrowButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </ArrowButton>
          {Array.from({ length: totalPages }, (_, index) => (
            <PageNumber
              key={index}
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </PageNumber>
          ))}
          <ArrowButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </ArrowButton>
        </Pagination>
      )}
    </ListContainer>
  );
};

export default Searchlist;

const ListContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 0 50px 0;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: #d8d8d8;
  width: calc(100%);
  margin: 20px 0;
`;

const NoResults = styled.div`
  margin-top: 20px;
  margin-bottom: 200px;
  color: #999;
  font-size: 18px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 10px;
`;

const PageNumber = styled.button`
  background: none;
  border: none;
  color: ${({ isActive }) => (isActive ? "#000" : "#bbb")};
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: #bbb;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #000;
  }
  &:disabled {
    color: #eee;
    cursor: default;
  }
`;
