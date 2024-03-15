import styled from "styled-components";
import { GrFormPrevious } from "react-icons/gr";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillPicture } from "react-icons/ai";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [nickname, setNickname] = useState("");
  const [imgFile, setImgFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleSubmit = async () => {
    const profileImgUrl = await handleImgSubmit();
    console.log("profileImgUrl!!!:", profileImgUrl);
  };

  const handleImgSubmit = () => {
    const storageRef = ref(storage, `files/${imgFile.name}`);
    const uploadTask = uploadBytes(storageRef, imgFile);

    return uploadTask.then((snapshot) => {
      return getDownloadURL(snapshot.ref).then((downloadUrl) => {
        console.log("File available at", downloadUrl);
        return downloadUrl;
      });
    });
  };

  const handleFileSelect = (e) => {
    setImgFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!imgFile) return;
    const nextPreview = URL.createObjectURL(imgFile);
    setPreview(nextPreview);

    return () => {
      URL.revokeObjectURL(nextPreview);
      setPreview("");
    };
  }, [imgFile]);

  return (
    <Container>
      <Header>
        <Link to="/">
          <GrFormPrevious fontSize={32} />
        </Link>
        <HeaderTitle>
          <span>회원가입</span>
        </HeaderTitle>
      </Header>
      <Contents>
        <div>
          <ProfileUpload $preview={preview === ""}>
            <label
              for="file"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 1,
              }}
            >
              {preview && (
                <Preview>
                  <Deem />
                  <Img src={preview} />
                </Preview>
              )}
              {!preview && (
                <AiFillPicture
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    cursor: "pointer",
                    zIndex: -1,
                  }}
                  fontSize={60}
                  color="#aaa"
                />
              )}
            </label>
          </ProfileUpload>
          <FileInput type="file" id="file" onChange={handleFileSelect} />
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="아이디"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="비밀번호"
          />
          <Input
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            type="text"
            placeholder="비밀번호 확인"
          />

          <Input
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            type="text"
            placeholder="닉네임"
          />
        </div>
        <Btn onClick={handleSubmit}>확인</Btn>
      </Contents>
    </Container>
  );
};

const Container = styled.div`
  max-width: 900px;
  padding: 20px 30px;
  margin: 0 auto;
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  a {
    &:active {
      color: #000;
    }
  }
`;

const Btn = styled.button`
  border: none;
  margin-top: 40px;
  background-color: #f5f5f5;
  padding: 13px 0;
  width: 100%;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
`;

const HeaderTitle = styled.h1`
  flex-grow: 1;
  text-align: center;
  font-size: 17px;
  span {
    margin-left: -20px;
  }
`;

const Contents = styled.div`
  padding-top: 20px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid #eaeaea;
  padding-bottom: 10px;
  transition: 0.2s;
  &:focus {
    outline: none;
    border-color: #000;
  }
  &:not(first-child) {
    margin-top: 30px;
  }
`;

const FileInput = styled.input`
  display: none;
`;

const ProfileUpload = styled.div`
  background-color: #f5f5f5;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 20px auto;

  // display: ${({ $preview }) => ($preview ? "flex" : "block")};
  // justify-content: center;
  // align-items: center;

  cursor: pointer;
  overflow: hidden;
`;

const Img = styled.img`
  // position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Preview = styled.div`
  position: relative;
  cursor: pointer;
  height: 100%;
`;

const Deem = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 0;
`;

export default Signup;
