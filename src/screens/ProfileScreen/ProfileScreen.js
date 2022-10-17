import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Nav from "../../components/Nav/Nav";
import PlansScreen from "../PlansScreen/PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB5CAMAAAAu0a5GAAAAbFBMVEUAAAD29vb39/f7+/v+/v7w8PDh4eHm5ua7u7vr6+uVlZXz8/OioqKcnJx5eXm1tbUfHx9ISEjJyckvLy+pqaltbW0ZGRl/f3+Pj48lJSXa2trBwcGIiIhgYGDS0tJmZmZTU1MSEhI3Nzc/Pz8KysQeAAAFQ0lEQVRogd2b65qCOAyGS1KOKiigICKi3v89Lmdx5JBU1N39fs3jzPha2qbJlyrgdxKg/Ur/STYgoiyFCKpvocQGBD05bSLXjRwvMzXEL7EBpe65d9Fpm28yifwx8NmI2V686L62JfeduGxEP38lV6OPdSadxwY03GFyqcBbseadxQb0gnF0oX3CgXPYoKWT5HLoJ8aaY7BxdZ5DFwrpk05nwyonoIVYk+FkNuqUUVdw6pxT2YARES2EJZdl45qMFkfiaieyMdvS2eKyIr0pjQ24Y6DL9bYcW4YstDjopBFR2KAfeGzhUgZOYnMWWiODsNwobFhxFlqtlDBwChstNloIwowT2KBdFNje/EMnsDHhP/LiONXmB0VgewpoEZiLsAfSM4L82Yc+z4YVL6a1CpdgG9zAUitagI2ZElqcl2D7aux8tlQisJWWuRC72ehCYPODeaW7/Tv2bQk28+xedNy/nG/VdT4b0P/d+xuMqxLbXYKtq8Xz+fKEco6ppA5CnBZhOyrow3xxQmGfVNjzW4yUr5nTZsOwoh/mitYiuaJaVF0mR9bA5qP3C9UlKruM8MiJbHZhsqUUorQ6VOOudEo5Rq2/N0y2sVj9za5EowV9B02yEqctzewhsnmHWbyoz8TKnG7zZSCLDYyK0FvY29PQoC43QuXNZJOP0sBe2k8t4TGJnZHtewYbgOSf0zsHnL4B2vMbLSauMy67WG9z8JTTI+T1iebgLDS3P4b21JxveM1Bemyp/w7HM+aDL9u/WTCuAaLh6dj8bN0G0fvWvkXf0kntUUJNhGhb+4O4tDEDzfTVebp70PxaWldxi7PVPH2OXTzrJK57vrmJ7WvZ/pl+W9sNCmSTX+Vrc+7ZT7MBbe+xuILuWEZprC/3Y/niNcgjS2t7YgCPfPrq+tokfYINKE3nKVG7nrq+W/HLlWmUsuExufink5VbcqJTN8ouptl/TY1d+xG3uusa3Qsye1mG1405Sh9hF2Ox8qHVfLPGljBIffCwOcamHI7xg2xA3RsNYHk2NIvFZgiPI/9xSI3BCxED7GKzDI+51eVU7t/qYUP9D8X+X09F2yA2Bz7vKxth7FbBQ7vYN/SKWd4w0Q1vP+c1Hx37hf6XDdKgJWbX3dlNHceJ3QsthQ3Cvw/+DxtXSgYHTffT86J7YoP01TwlqvamHGGj9sFB1zr270P02GirNWV4Wj/gDzaa+RfQRYLRBcKODfp30L1MtmNLWva9gLZtktGwARUdWxW1zfF23Gxn4Q0dGleiHbf22Y39rI3sszH5IrptnbXsj0eVJ9XJV8OWw3nvp7TusdH4KlrsZI+t2ANTVtU7q9nwjUjeV2W3VmywVdz5dxR1bNUWmLry8rZVzf72dIur2bIl/V7cUip3eM2euHT6f2artpnVFdjtfIOpcmvoHT32mIZfPL0rmb24Bt89S0LZP0OV+o6qcp5yhyJ5+N7IY3jKmcpjlHrn901twzZB79UG+ldylzzrCpNeTQSY5Z8mbzfaoxR9qkMRws8uucjoGz/P9Tcgjhst7+qaGhP1d0UH/yPR/b5+sZte/ZbSuA1ztbt6YwpcX3+1moY8rtIzTNbnMcuKq5vrDVurY95e8SkNK7q/WyBud45vj3m6434qFMOHxEqVH//2nJ4MnHDSZ3zkgo964jkX3gRsL46X6FPceXbDL78ppiUnL96fd8HENBx3+T4NT5lef61s5o3pvZrKRARtZRpJ4lvhxkmjyC0VRamzCb1TliRm4zUSu0XMPlHpolZOZv2duU7Y2Jsf6RN9Qj9m/07/ADyRSDh+bay7AAAAAElFTkSuQmCC"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
