import * as React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  const [emailVerified, setEmailVerified] = React.useState(false);

  const onSubmit = (data) => console.log(data);

  const handleVerifyEmail = () => {
    console.log("Verifying email: ", getValues("email"));
    setEmailVerified(true);
  };

  return (
    <Container>
      <FormWrapper>
        <Title>회원가입</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label>이름</Label>
          <Input {...register("name")} />
          <Error>{errors.name?.message}</Error>
          <Divider />

          <Label>이메일</Label>
          <EmailWrapper>
            <Email>{getValues("email") || "aaaa@gmail.com"}</Email>
            <EmailButton type="button" onClick={handleVerifyEmail}>
              {emailVerified ? "재인증" : "인증"}
            </EmailButton>
          </EmailWrapper>
          <Error>{errors.email?.message}</Error>
          <Divider />

          {emailVerified && (
            <>
              <Label>인증번호</Label>
              <VerificationWrapper>
                <VerificationCode {...register("confirmationCode")} />
                <VerifyButton>확인</VerifyButton>
              </VerificationWrapper>
              <Error>{errors.confirmationCode?.message}</Error>
              <Divider />
            </>
          )}

          <Label>비밀번호</Label>
          <Password {...register("password")} type="password" />
          <Error>{errors.password?.message}</Error>
          <Divider />
          <PasswordHint>
            최소 하나 이상의 영문, 숫자, 특수문자 포함 (8-30자)
          </PasswordHint>

          <Label>비밀번호 확인</Label>
          <PasswordConfirmWrapper>
            <PasswordConfirm {...register("passwordConfirm")} type="password" />
            <PasswordConfirmIcon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2532982276e89e4d757a8b9aad4efb45a9e2e0081d28eb3344961a3bf127e68?apiKey=a9a9d68966df47cab33790d709ea20f1&"
              alt="Password confirm icon"
            />
          </PasswordConfirmWrapper>
          <Error>{errors.passwordConfirm?.message}</Error>
          <Divider />

          <Label>닉네임</Label>
          <Input {...register("nickname")} />
          <Error>{errors.nickname?.message}</Error>
          <Divider />
          <NicknameHint>
            한글, 영문과 숫자 및 기호 (- _ .) 사용 가능 (3-12자)
          </NicknameHint>

          <Label>블로그 링크</Label>
          <BlogLinkWrapper>
            <BlogLink>blog.domain.com/</BlogLink>
            <DuplicateCheckButton type="button">중복확인</DuplicateCheckButton>
          </BlogLinkWrapper>
          <Error>{errors.blogUrl?.message}</Error>
          <Divider />
        </Form>
        <TermsWrapper>
          <TermsHint>영문 대소문자, 숫자와 - _ 만 입력 가능합니다.</TermsHint>
          <TermsAgreeWrapper>
            <TermsAgreeText>
              <TermsAgreeCheckbox
                {...register("termsAgreed")}
                type="checkbox"
              />
              <TermsAgreeLabel>
                <TermsLink>이용약관</TermsLink>과{" "}
                <PrivacyLink>개인정보취급방침</PrivacyLink>에 동의합니다.
              </TermsAgreeLabel>
            </TermsAgreeText>
          </TermsAgreeWrapper>
          <Error>{errors.termsAgreed?.message}</Error>
          <SignUpButton type="submit">가입하기</SignUpButton>
        </TermsWrapper>
      </FormWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  max-width: 1670px;
  width: 768px;
  margin: 10px auto 0;
  font-weight: 400;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    max-width: 100%;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: end;
  margin-top: 90px;
  @media (max-width: 991px) {
    margin-top: 40px;
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font: 87px Syncopate, sans-serif;
  text-align: center;
  color: #000;
  @media (max-width: 991px) {
    font-size: 40px;
    max-width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 111px;
  padding-left: 48px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding-left: 20px;
    max-width: 100%;
  }
`;

const Label = styled.label`
  font: 46px Syncopate, sans-serif;
  text-align: center;
  color: #000;
  @media (max-width: 991px) {
    font-size: 40px;
    max-width: 100%;
  }
`;

const Input = styled.input`
  font: 27px Pretendard, sans-serif;
  color: #000;
  margin-top: 92px;
  @media (max-width: 991px) {
    margin-top: 40px;
    max-width: 100%;
  }
`;

const Error = styled.p`
  font: 21px Pretendard, sans-serif;
  color: rgba(255, 12, 12, 0.8);
  margin-top: 13px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Divider = styled.hr`
  height: 2px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.6);
  margin-top: 128px;
  @media (max-width: 991px) {
    margin-top: 40px;
    max-width: 100%;
  }
`;

const EmailWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 91px;
  white-space: nowrap;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
    white-space: initial;
    max-width: 100%;
  }
`;

const Email = styled.span`
  font: 30px Pretendard, sans-serif;
  color: rgba(0, 0, 0, 0.8);
  flex: 1;
`;

const EmailButton = styled.button`
  font: 27px Pretendard, sans-serif;
  color: #000;
`;

const VerificationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 91px;
  font-size: 27px;
  color: #000;
  white-space: nowrap;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
    white-space: initial;
    max-width: 100%;
  }
`;

const VerificationCode = styled.input`
  font-family: Pretendard, sans-serif;
`;

const VerifyButton = styled.button`
  font-family: Pretendard, sans-serif;
`;

const Password = styled.input`
  font: 27px Pretendard, sans-serif;
  color: #000;
  margin-top: 92px;
  @media (max-width: 991px) {
    margin-top: 40px;
    max-width: 100%;
  }
`;

const PasswordHint = styled.p`
  font: 21px Pretendard, sans-serif;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 13px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PasswordConfirmWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 95px;
  font-size: 27px;
  color: #000;
  white-space: nowrap;
  padding: 0 1px;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
    white-space: initial;
    max-width: 100%;
  }
`;

const PasswordConfirm = styled.input`
  font-family: Pretendard, sans-serif;
  align-self: start;
  flex: 1;
`;

const PasswordConfirmIcon = styled.img`
  width: 30px;
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  fill: rgba(235, 235, 235, 0);
`;

const PasswordMismatch = styled.p`
  font: 21px Pretendard, sans-serif;
  color: rgba(255, 12, 12, 0.8);
  margin-top: 13px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const NicknameHint = styled.p`
  font: 21px Pretendard, sans-serif;
  color: rgba(0, 0, 0, 0.8);
  margin-top: 13px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const BlogLinkWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 60px;
  font-size: 27px;
  white-space: nowrap;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
    white-space: initial;
    max-width: 100%;
  }
`;

const BlogLink = styled.span`
  font-family: Pretendard, sans-serif;
  color: #8d8d8d;
  flex: 1;
`;

const DuplicateCheckButton = styled.button`
  font-family: Pretendard, sans-serif;
  color: #000;
`;

const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 11px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TermsHint = styled.p`
  font: 21px Pretendard, sans-serif;
  color: rgba(0, 0, 0, 0.8);
  margin-left: 21px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const TermsAgreeWrapper = styled.div`
  display: flex;
  align-self: stretch;
  gap: 6px;
  margin-top: 62px;
  font-size: 28px;
  color: #000;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const TermsAgreeIcon = styled.img`
  width: 26px;
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  align-self: start;
`;

const TermsAgreeText = styled.div`
  font-family: Syncopate, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const TermsAgreeCheckbox = styled.input.attrs({ type: "checkbox" })`
  margin-right: 10px;
`;

const TermsAgreeLabel = styled.label`
  display: flex;
  align-items: center;
`;

const TermsLink = styled.span`
  color: rgba(82, 120, 255, 1);
  margin-right: 5px;
`;

const PrivacyLink = styled.span`
  color: rgba(82, 120, 255, 1);
  margin-left: 5px;
`;

const SignUpButton = styled.button`
  justify-content: center;
  border-radius: 8.922px;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: #fff;
  margin-top: 107px;
  color: #0096ff;
  white-space: nowrap;
  text-align: center;
  padding: 16px 42px;
  font: 46px Syncopate, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
    margin-top: 40px;
    white-space: initial;
    padding: 0 20px;
  }
`;

export default Signup;
