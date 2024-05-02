import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import termsImg from "../assets/img/icons/termsicon.svg";

const schema = yup
  .object({
    name: yup.string().required("이름을 입력해주세요"),
    email: yup
      .string()
      .email("유효한 이메일 주소를 입력해주세요")
      .required("이메일을 입력해주세요"),
    confirmationCode: yup.string().when("emailVerified", {
      is: true,
      then: yup.string().required("인증번호를 입력해주세요"),
    }),
    password: yup
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,30}$/,
        "비밀번호는 최소 하나 이상의 영문, 숫자, 특수문자를 포함해야 합니다 (8-30자)"
      )
      .required("비밀번호를 입력해주세요"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다")
      .required("비밀번호 확인을 입력해주세요"),
    nickname: yup
      .string()
      .matches(
        /^[가-힣a-zA-Z0-9-_.]{3,12}$/,
        "닉네임은 한글, 영문과 숫자 및 기호 (- _ .) 사용 가능 (3-12자)"
      )
      .required("닉네임을 입력해주세요"),
    blogUrl: yup
      .string()
      .url("유효한 URL을 입력해주세요")
      .matches(
        /^[a-zA-Z0-9-_]+$/,
        "영문 대소문자, 숫자와 - _ 만 입력 가능합니다"
      )
      .required("블로그 링크를 입력해주세요"),
    termsAgreed: yup
      .boolean()
      .oneOf([true], "이용약관과 개인정보취급방침에 동의해주세요"),
  })
  .required();

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [emailVerified, setEmailVerified] = useState(false);

  const onSubmit = (data) => console.log(data);

  const handleVerifyEmail = () => {
    console.log("Verifying email: ", getValues("email"));
    setEmailVerified(true);
  };

  const handleConfirmCode = () => {
    console.log("Confirming code: ", getValues("confirmationCode"));
    // 여기에 인증번호 확인 API 호출 로직 추가
    // 인증번호가 맞는지 여부에 따라 setEmailVerified를 사용하여 emailVerified 값을 업데이트
  };

  const handleVerifyBlogUrl = () => {
    console.log("Verifying blog URL: ", getValues("blogUrl"));
    // 여기에 블로그 URL 중복 확인 API 호출 로직 추가
  };

  return (
    <SignupWrapper>
      <Title>회원가입</Title>
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormSection>
            <FormLabel>이름</FormLabel>
            <FormGroup>
              <InputWrapper>
                <DisplayName
                  {...register("name")}
                  placeholder="이름을 입력하세요"
                />
              </InputWrapper>
              <WidthMarker>이름을 입력하세요</WidthMarker>
              {errors["name"] && <Error>{errors["name"].message}</Error>}
            </FormGroup>
          </FormSection>

          <FormSection>
            <FormLabel>이메일</FormLabel>
            <FormGroup>
              <InputWrapper>
                <DisplayName
                  {...register("email")}
                  placeholder="이메일을 입력하세요"
                />
                <VerifyButton
                  onClick={handleVerifyEmail}
                  disabled={emailVerified}
                >
                  인증
                </VerifyButton>
              </InputWrapper>
              <WidthMarker>이메일을 입력하세요</WidthMarker>
              {errors["email"] && <Error>{errors["email"].message}</Error>}
            </FormGroup>
          </FormSection>

          {emailVerified && (
            <FormSection>
              <FormLabel>인증번호</FormLabel>
              <FormGroup>
                <InputWrapper>
                  <DisplayName
                    {...register("confirmationCode")}
                    placeholder="인증번호를 입력하세요"
                  />
                  <VerifyButton onClick={handleConfirmCode}>확인</VerifyButton>
                </InputWrapper>
                <WidthMarker>인증번호를 입력하세요</WidthMarker>
                {errors["confirmationCode"] && (
                  <Error>{errors["confirmationCode"].message}</Error>
                )}
              </FormGroup>
            </FormSection>
          )}

          <FormSection>
            <FormLabel>비밀번호</FormLabel>
            <FormGroup>
              <InputWrapper>
                <DisplayName
                  {...register("password")}
                  placeholder="비밀번호를 입력하세요"
                  type="password"
                />
              </InputWrapper>
              <WidthMarker>비밀번호를 입력하세요</WidthMarker>
              {errors["password"] && (
                <Error>{errors["password"].message}</Error>
              )}
            </FormGroup>
          </FormSection>

          <FormSection>
            <FormLabel>비밀번호 확인</FormLabel>
            <FormGroup>
              <InputWrapper>
                <DisplayName
                  {...register("passwordConfirm")}
                  placeholder="비밀번호 확인을 입력하세요"
                  type="password"
                />
              </InputWrapper>
              <WidthMarker>비밀번호 확인을 입력하세요</WidthMarker>
              {errors["passwordConfirm"] && (
                <Error>{errors["passwordConfirm"].message}</Error>
              )}
            </FormGroup>
          </FormSection>

          <FormSection>
            <FormLabel>닉네임</FormLabel>
            <FormGroup>
              <InputWrapper>
                <DisplayName
                  {...register("nickname")}
                  placeholder="닉네임을 입력하세요"
                />
              </InputWrapper>
              <WidthMarker>닉네임을 입력하세요</WidthMarker>
              {errors["nickname"] && (
                <Error>{errors["nickname"].message}</Error>
              )}
            </FormGroup>
          </FormSection>

          <FormSection>
            <FormLabel>블로그 링크</FormLabel>
            <FormGroup>
              <InputWrapper>
                <BlogUrlPrefix>blog.domain.com/</BlogUrlPrefix>
                <DisplayName
                  {...register("blogUrl")}
                  placeholder="블로그 링크를 입력하세요"
                />
                <VerifyButton onClick={handleVerifyBlogUrl}>
                  중복 확인
                </VerifyButton>
              </InputWrapper>
              <WidthMarker>블로그 링크를 입력하세요</WidthMarker>
              {errors["blogUrl"] && <Error>{errors["blogUrl"].message}</Error>}
            </FormGroup>
          </FormSection>

          <TermsWrapper
            onClick={() => setValue("termsAgreed", !getValues("termsAgreed"))}
          >
            <TermsBox>
              <TermsImg src={termsImg} />
            </TermsBox>
            <TermsTitle>
              <TermsButton type="button">이용약관</TermsButton>과{" "}
              <TermsButton type="button">개인정보취급방침</TermsButton>에
              동의합니다.
            </TermsTitle>
          </TermsWrapper>
        </Form>
      </FormWrapper>
    </SignupWrapper>
  );
};

export default Signup;

const Error = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SignupWrapper = styled.div`
  width: 768px;
  margin: 100px auto 0px;
  line-height: 1.5;
`;

const Title = styled.h2`
  font-size: 4rem;
  font-weight: bolder;
  margin: 0px;
`;

const FormWrapper = styled.div`
  box-sizing: inherit;
`;

const Form = styled.form`
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const FormSection = styled.div`
  box-sizing: inherit;
`;

const FormLabel = styled.label`
  font-weight: bold;
  font-size: 1.125rem;
  color: var(--text1);
  transition: all 0.125s ease-in 0s;
`;

const FormGroup = styled.div`
  display: block;
  margin-top: 10px;
  max-width: 100%;
`;

const InputWrapper = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid;
  display: flex;
  align-items: center;
`;

const DisplayName = styled.input`
  background: transparent;
  font-size: 1.5rem;
  border: none;
  outline: none;
  width: 100%;
  color: var(--text2);
  transition: all 0.125s ease-in 0s;
`;

const WidthMarker = styled.div`
  max-width: 100%;
  display: inline-block;
  visibility: hidden;
  font-size: 1.5rem;
  overflow: hidden;
  line-height: 0;
`;

const TermsWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: var(--text1);
  gap: 0.5rem;
  cursor: pointer;
`;

const TermsBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid var(--border2);
  border-radius: 4px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
`;

const TermsImg = styled.img`
  box-sizing: inherit;
`;

const TermsTitle = styled.span`
  box-sizing: inherit;
`;

const TermsButton = styled.span`
  color: #5278ff;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const VerifyButton = styled.button`
  border: none;
  color: #0096ff;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  outline: none; /* Remove default outline */
  transition: background-color 0.3s ease; /* Smooth transition for hover effect */
  flex: none; /* 추가: 버튼의 레이아웃을 명시적으로 정의 */

  &:disabled {
    background-color: #cccccc; /* Gray background when disabled */
    cursor: not-allowed;
  }
`;

const BlogUrlPrefix = styled.span`
  font-size: 1.5rem;
  color: gray;
  margin-right: 5px;
`;
