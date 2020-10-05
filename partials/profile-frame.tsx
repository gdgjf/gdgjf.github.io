import qs from "querystring";
import { useEffect, useRef, useState } from "react";
import { DownloadElement } from "../utils";

export interface UserData {
  avatar_url: string;
  bio: string | null;
  blog: string;
  html_url: string;
  id: number;
  login: string;
  name: string;
  node_id: string;
  url: string;
  roles: Array<string>;
}

function ProfileFrame() {
  const [isLoading, setIsLoading] = useState(false);
  const [dropDownData, setDropDownData] = useState<any[]>();
  const [userRole, setUserRole] = useState('');
  const [userData, setUserData] = useState<UserData>();
  const divRef = useRef<HTMLDivElement>(null);
  const isDev = process.env.NODE_ENV !== "production";

  const params = isDev ? {
    client_id: 'a62497d8f97d36ce27ba',
    redirect_uri: 'http://localhost:3000/profile-frame',
    client_secret: 'c84d20a06833815b97b0673c7112874719bf37b5',
    scope: 'read:org'
  } : {
    client_id: 'a6f77bda2415ed01330e',
    redirect_uri: 'https://gdgjf.github.io/profile-frame',
    client_secret: '8caf44688c5f96871bc8c5eece2178028762ac10',
    scope: 'read:org'
  };
  
  const queryString = qs.stringify(params);

  const handleLogin = (hasLogin: boolean) => () => {
    if(!hasLogin)
      window.open(`https://github.com/login/oauth/authorize/?${queryString}`, 'newwindow',  'width=600,height=750')
  };

  useEffect(() => {
    const setState = ({newValue, key}: StorageEvent) => {
      if(key === '@GitHub_User' || key === null)
        setUserData(JSON.parse(newValue!));
    }
    window.addEventListener('storage', setState);

    if(localStorage.getItem('@GitHub_User')){
      setUserData(JSON.parse(localStorage.getItem('@GitHub_User')!));
    }
    else{
      (async () => {
        const code = qs.parse(window.location.search.replace('?',''))?.code;
        if(code){
          setIsLoading(true);
          fetch('/api/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...params, code})
          })
          .then(resp => resp.json())
          .then(resp => {
            setIsLoading(false);
            localStorage.setItem('@GitHub_User', JSON.stringify(resp));
            window.open('', '_self', '');
            window.close();
          });        
        } 
      })();
    }
    return () => window.removeEventListener('storage', setState);
  }, []);

  useEffect(() => {
    if(userData){
      if(userData?.roles.length === 1) {
        setUserRole(userData.roles[0]);
      }
      else if(userData?.roles.length > 1){
        setDropDownData(userData.roles);
      }
    }
  }, [userData])

  return isLoading ? (
    <div className="spinnerWrapper">
      <div className="spinner"></div>
    </div>
  ) : (
    <div>
      <div id="participate" className="section-como-participar section-full-width">
        <div className="profile-frame-container">
          <div className="profile-frame-content">
            <div className="profile-frame-intro">
              <div className="profile-frame-intro-wrapper">
                <div className="profile-frame-intro-title">
                  GDGJF
                </div>
                <div className="profile-frame-intro-subtitle">
                  Crie sua imagem de perfil autenticando com o Github
                </div>
                <div className="profile-frame-intro-button-group">
                  {userData?.roles?.length! > 1 ? 
                    <select className="custom-select" defaultValue="" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUserRole(e.target.value)}>
                      <option value="">Escolha...</option>
                      {dropDownData?.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  :
                    <button onClick={handleLogin(false)} className="profile-frame-intro-button">
                      Gerar com Github
                    </button>
                  }
                </div>
              </div>
            </div>
            <div className="profile-frame-picture">
              <div className="profile-frame-picture-frame" ref={divRef} style={{border: !Boolean(userData?.avatar_url) ? '5px dashed gray' : '1px solid #e1e1e1'}}>
                {userData?.avatar_url ? <img className="avatar-image" src={userData.avatar_url}/> : 'Sua imagem aqui'}
                <div className="profile-frame-picture-footer">
                  <div className="profile-frame-picture-footer-identification">
                    <div className="profile-frame-picture-footer-logo-wrapper">
                      <img src="/images/gdg-logo-icon.png" className="gdg-logo"/>
                      <h3>GDG Juiz de fora</h3>
                    </div>
                  </div>
                  <h4 className="profile-frame-picture-footer-identification-role">
                    {userRole ? userRole : "Seu papel"}
                  </h4>
                </div>
              </div>
              {userData?.avatar_url && userRole && 
                <button onClick={() => DownloadElement(divRef?.current!, 'gdg')} className="profile-frame-intro-button">
                  <p>Download</p>
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileFrame;