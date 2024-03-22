import * as React from 'react';
import Svg, {SvgProps, Path, Mask, G} from 'react-native-svg';

const BeerIcon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.2499 1.49062L13.4081 3.61875C13.3387 3.79312 13.0818 3.76312 13.0574 3.57562L12.7537 1.30687C12.7387 1.18875 12.8381 1.08562 12.9562 1.10062L14.1018 1.24125C14.2199 1.25625 14.2931 1.38 14.2499 1.49062ZM16.4849 3.74625L14.3118 4.46063C14.1337 4.51875 13.9931 4.30125 14.1206 4.1625L15.6693 2.47875C15.6882 2.45811 15.7116 2.44207 15.7377 2.43189C15.7637 2.4217 15.7918 2.41762 15.8197 2.41998C15.8476 2.42233 15.8745 2.43105 15.8985 2.44547C15.9225 2.45988 15.9429 2.47961 15.9581 2.50313L16.5824 3.4725C16.6462 3.57375 16.5993 3.70875 16.4849 3.74625ZM11.2349 1.815L12.2699 3.855C12.3543 4.02375 12.1612 4.19437 12.0056 4.08937L10.1062 2.81437C10.083 2.79879 10.0637 2.77808 10.0497 2.75385C10.0358 2.72962 10.0276 2.70251 10.0258 2.67461C10.024 2.64672 10.0286 2.61878 10.0393 2.59295C10.05 2.56712 10.0664 2.54408 10.0874 2.52562L10.9518 1.76063C11.0399 1.68 11.1806 1.70812 11.2349 1.815Z"
      fill="#FF6F00"
    />
    <Path
      d="M4.50741 7.36688L3.89803 7.335L3.12178 16.2863C2.97178 17.7863 5.09053 18.5775 7.13241 18.7838L8.24241 7.74188L4.50741 7.36688Z"
      fill="#E0E0E0"
    />
    <Path
      d="M11.974 8.11875L12.5777 8.20875L11.5577 17.1356C11.4077 18.6356 9.17273 18.99 7.13086 18.7856L8.24086 7.74375L11.974 8.11875Z"
      fill="#E0E0E0"
    />
    <Path
      d="M8.34404 6.72937C7.25841 6.62062 6.23091 6.64313 5.45091 6.79125C4.77966 6.91875 4.36716 7.13437 4.34279 7.365C4.32029 7.59562 4.68216 7.88812 5.31404 8.14875C6.04904 8.45062 7.05216 8.6775 8.13779 8.78625C9.22341 8.895 10.2509 8.8725 11.0309 8.72437C11.7022 8.59687 12.1147 8.38125 12.139 8.15063C12.1615 7.92 11.7997 7.6275 11.1678 7.36688C10.4309 7.065 9.42779 6.83812 8.34404 6.72937Z"
      fill="#FAFAFA"
    />
    <Path
      d="M4.4252 10.815L3.96582 15.7913C3.97145 16.0744 4.17207 16.365 4.4702 16.5413C5.0027 16.8544 6.07145 17.2163 7.2827 17.3381C8.43957 17.4544 9.44645 17.3231 10.0408 17.1394C10.4177 17.0231 10.7402 16.7456 10.8114 16.485L11.3664 11.5144"
      fill="#FBCC2F"
    />
    <Path
      d="M11.3687 11.5124C11.4162 11.0394 9.90036 10.4998 7.9829 10.3071C6.06543 10.1143 4.47248 10.3415 4.42494 10.8144C4.3774 11.2873 5.89328 11.8269 7.81075 12.0197C9.72821 12.2124 11.3212 11.9853 11.3687 11.5124Z"
      fill="#E5A315"
    />
    <Path
      d="M8.11539 9.00187C5.64039 8.7525 3.82726 8.03063 3.89851 7.32188C3.96976 6.61313 5.88976 6.26625 8.36476 6.51563C10.8398 6.765 12.6529 7.48688 12.5816 8.19563C12.5104 8.9025 10.5904 9.24937 8.11539 9.00187ZM8.34414 6.72938C7.25851 6.62063 6.23101 6.64313 5.45101 6.79125C4.77976 6.91875 4.36726 7.13437 4.34289 7.365C4.32039 7.59563 4.68226 7.88813 5.31414 8.14875C6.04914 8.45063 7.05226 8.6775 8.13789 8.78625C9.22351 8.895 10.251 8.8725 11.031 8.72438C11.7023 8.59687 12.1148 8.38125 12.1391 8.15063C12.1616 7.92 11.7998 7.6275 11.1679 7.36688C10.431 7.065 9.42789 6.83813 8.34414 6.72938Z"
      fill="#CECFD1"
    />
    <Path
      d="M9.11244 16.6412C9.12166 16.5495 9.05479 16.4677 8.96309 16.4585C8.87139 16.4493 8.78958 16.5162 8.78036 16.6079C8.77114 16.6996 8.83801 16.7814 8.92971 16.7906C9.02141 16.7998 9.10322 16.7329 9.11244 16.6412Z"
      fill="#E5A315"
    />
    <Path
      d="M9.47342 16.2183C9.47974 16.1554 9.43391 16.0994 9.37105 16.093C9.3082 16.0867 9.25213 16.1326 9.24581 16.1954C9.2395 16.2583 9.28533 16.3143 9.34818 16.3206C9.41103 16.327 9.4671 16.2811 9.47342 16.2183Z"
      fill="#E5A315"
    />
    <Path
      d="M8.84803 15.94C8.85921 15.8288 8.77807 15.7295 8.6668 15.7183C8.55552 15.7071 8.45624 15.7883 8.44506 15.8995C8.43387 16.0108 8.51501 16.1101 8.62629 16.1213C8.73757 16.1325 8.83684 16.0513 8.84803 15.94Z"
      fill="#E5A315"
    />
    <Path
      d="M9.57267 15.8041C9.58417 15.6897 9.50078 15.5877 9.38641 15.5762C9.27204 15.5647 9.17001 15.6481 9.15851 15.7625C9.14701 15.8768 9.23041 15.9789 9.34478 15.9904C9.45914 16.0019 9.56118 15.9185 9.57267 15.8041Z"
      fill="#E5A315"
    />
    <Path
      d="M8.95814 14.8495C8.96736 14.7578 8.90049 14.676 8.80879 14.6668C8.71709 14.6576 8.63528 14.7245 8.62606 14.8162C8.61685 14.9079 8.68371 14.9897 8.77541 14.9989C8.86711 15.0081 8.94892 14.9412 8.95814 14.8495Z"
      fill="#E5A315"
    />
    <Path
      d="M9.3672 14.971C9.37538 14.8897 9.31603 14.817 9.23463 14.8089C9.15323 14.8007 9.08061 14.86 9.07243 14.9414C9.06425 15.0228 9.1236 15.0954 9.205 15.1036C9.2864 15.1118 9.35901 15.0524 9.3672 14.971Z"
      fill="#E5A315"
    />
    <Path
      d="M10.0879 14.0838C10.0961 14.0024 10.0367 13.9298 9.95533 13.9216C9.87394 13.9134 9.80132 13.9728 9.79313 14.0542C9.78495 14.1356 9.84431 14.2082 9.9257 14.2164C10.0071 14.2246 10.0797 14.1652 10.0879 14.0838Z"
      fill="#E5A315"
    />
    <Path
      d="M8.80008 13.0674C8.81043 12.9643 8.7353 12.8724 8.63227 12.8621C8.52923 12.8517 8.43731 12.9268 8.42696 13.0299C8.4166 13.1329 8.49173 13.2248 8.59476 13.2352C8.6978 13.2455 8.78972 13.1704 8.80008 13.0674Z"
      fill="#E5A315"
    />
    <Path
      d="M9.64312 14.5204C9.65576 14.3947 9.5641 14.2826 9.4384 14.27C9.3127 14.2573 9.20055 14.349 9.18792 14.4747C9.17528 14.6004 9.26694 14.7125 9.39264 14.7252C9.51834 14.7378 9.63049 14.6461 9.64312 14.5204Z"
      fill="#E5A315"
    />
    <Path
      d="M9.11283 13.758C9.12525 13.6344 9.0351 13.5241 8.91146 13.5116C8.78782 13.4992 8.67751 13.5894 8.66508 13.713C8.65265 13.8366 8.74281 13.9469 8.86645 13.9594C8.99009 13.9718 9.1004 13.8816 9.11283 13.758Z"
      fill="#E5A315"
    />
    <Path
      d="M9.84584 13.5569C9.85505 13.4652 9.78819 13.3834 9.69649 13.3742C9.60479 13.3649 9.52298 13.4318 9.51376 13.5235C9.50454 13.6152 9.57141 13.697 9.66311 13.7062C9.75481 13.7155 9.83662 13.6486 9.84584 13.5569Z"
      fill="#E5A315"
    />
    <Path
      d="M3.8423 7.86375C3.8423 7.86375 3.51418 8.17125 2.48293 8.24625C1.5998 8.31 0.615427 8.71125 0.412927 11.6044C0.236677 14.1281 0.519802 14.7356 1.94293 15.2269C3.1823 15.6544 3.1448 16.005 3.1448 16.005L3.82543 15.6206L4.13855 12.5081L4.51168 8.46L3.8423 7.86375ZM3.3998 11.8256C3.2948 12.8737 3.1598 13.7175 2.3948 13.6406C1.58105 13.5581 1.66543 12.7087 1.7723 11.6625C1.8773 10.6144 1.96355 9.765 2.7773 9.8475C3.58918 9.92812 3.5048 10.7775 3.3998 11.8256Z"
      fill="#E0E0E0"
    />
    <Path
      d="M10.667 17.4713C10.577 17.6644 10.2957 18.015 9.57758 18.2138C9.13508 18.3356 8.49383 18.42 7.98196 18.3169C7.87321 18.2944 7.91821 18.1913 7.99508 18.1838C8.43383 18.15 8.86321 18.0769 9.37883 17.9269C10.0501 17.7319 10.517 17.4281 10.5826 17.3925C10.6913 17.3306 10.682 17.4394 10.667 17.4713ZM6.13133 9.7125C5.96258 9.55688 5.83508 9.42 5.59508 9.27563C5.48071 9.20625 5.29321 9.17813 5.12258 9.16875L4.82258 12.42C4.82258 12.4556 4.84508 12.5475 4.95571 12.6094C5.04946 12.66 5.59321 12.8531 6.00571 12.9694C6.11446 12.9937 6.18758 12.9487 6.19508 12.8944L6.50446 9.95063C6.35633 9.87938 6.21383 9.78938 6.13133 9.7125ZM2.48258 8.66062C2.11508 8.685 1.86196 8.79938 1.59383 9.0525C1.41196 9.22688 1.14946 9.62063 1.12696 10.005C1.12696 10.035 1.12508 10.1981 1.19258 10.1981C1.29758 10.1981 1.33883 10.0744 1.35196 10.02C1.39883 9.84562 1.64071 9.40875 1.78508 9.27188C2.06258 9.01125 2.40383 8.97375 2.54446 8.94187C2.62696 8.92312 2.84446 8.8425 2.83696 8.7675C2.82571 8.6475 2.55946 8.65687 2.48258 8.66062Z"
      fill="white"
    />
    <Path
      d="M5.60973 4.33125C5.47098 4.41563 5.33973 4.515 5.18035 4.54688C4.91223 4.59938 4.64598 4.46437 4.36473 4.545C3.56973 4.77375 3.14973 5.36813 3.35785 6.16125C3.42723 6.4275 3.3166 6.54 3.22285 6.78375C2.96973 7.45688 3.36535 8.37938 4.12098 8.53875C4.57285 8.63438 5.0341 8.46375 5.47473 8.55563C5.84598 8.63438 6.00535 9.00188 6.3241 9.165C6.62598 9.31875 6.97473 9.38625 7.30848 9.40875C7.75848 9.44063 8.38285 9.15 8.7616 9.51375C9.34848 10.0781 8.8291 11.0662 9.54535 11.5969C9.83785 11.8144 10.2672 11.8125 10.5822 11.655C11.186 11.355 11.1241 10.5994 11.3435 10.0669C11.4016 9.92437 11.4729 9.79688 11.6135 9.72C11.7522 9.64313 11.8947 9.6825 12.0447 9.64125C12.2454 9.585 12.4366 9.50063 12.5997 9.36938C12.7872 9.21375 12.6972 8.88 12.9879 8.85375C13.0779 8.84438 13.1979 8.80688 13.271 8.76375C13.6685 8.52188 13.8072 7.96688 13.5766 7.56375C13.4922 7.41563 13.421 7.36875 13.4172 7.19625C13.4135 7.03875 13.4622 6.9075 13.4191 6.7425C13.3141 6.3375 12.9822 6.05437 12.5941 5.90812C12.5229 5.88 12.446 5.85563 12.371 5.835C12.2454 5.79938 12.1404 5.7825 12.0504 5.67938C12.0035 5.62688 11.9716 5.55188 11.9435 5.49C11.8591 5.31938 11.7372 5.17875 11.5985 5.04938C11.1897 4.66313 10.6085 4.52625 10.0535 4.545C9.90348 4.55062 9.7666 4.58812 9.62035 4.62563C9.25473 4.71938 9.14035 4.47187 8.87223 4.29375C8.53848 4.0725 8.11848 4.02562 7.7266 4.0425C7.49598 4.05375 7.31598 4.17 7.1041 4.23375C6.85848 4.30875 6.73285 4.22437 6.49848 4.18312C6.29035 4.1475 6.0616 4.1775 5.85535 4.22438C5.7691 4.24313 5.68848 4.28438 5.60973 4.33125Z"
      fill="#E9E2CF"
    />
    <Mask
      id="mask0_114_1321"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={4}
      width={11}
      height={8}>
      <Path
        d="M5.60973 4.33125C5.47098 4.41563 5.33973 4.515 5.18035 4.54688C4.91223 4.59938 4.64598 4.46437 4.36473 4.545C3.56973 4.77375 3.14973 5.36813 3.35785 6.16125C3.42723 6.4275 3.3166 6.54 3.22285 6.78375C2.96973 7.45688 3.36535 8.37938 4.12098 8.53875C4.57285 8.63438 5.0341 8.46375 5.47473 8.55563C5.84598 8.63438 6.00535 9.00188 6.3241 9.165C6.62598 9.31875 6.97473 9.38625 7.30848 9.40875C7.75848 9.44063 8.38285 9.15 8.7616 9.51375C9.34848 10.0781 8.8291 11.0662 9.54535 11.5969C9.83785 11.8144 10.2672 11.8125 10.5822 11.655C11.186 11.355 11.1241 10.5994 11.3435 10.0669C11.4016 9.92437 11.4729 9.79688 11.6135 9.72C11.7522 9.64313 11.8947 9.6825 12.0447 9.64125C12.2454 9.585 12.4366 9.50063 12.5997 9.36938C12.7872 9.21375 12.6972 8.88 12.9879 8.85375C13.0779 8.84438 13.1979 8.80688 13.271 8.76375C13.6685 8.52188 13.8072 7.96688 13.5766 7.56375C13.4922 7.41563 13.421 7.36875 13.4172 7.19625C13.4135 7.03875 13.4622 6.9075 13.4191 6.7425C13.3141 6.3375 12.9822 6.05437 12.5941 5.90812C12.5229 5.88 12.446 5.85563 12.371 5.835C12.2454 5.79938 12.1404 5.7825 12.0504 5.67938C12.0035 5.62688 11.9716 5.55188 11.9435 5.49C11.8591 5.31938 11.7372 5.17875 11.5985 5.04938C11.1897 4.66313 10.6085 4.52625 10.0535 4.545C9.90348 4.55062 9.7666 4.58812 9.62035 4.62563C9.25473 4.71938 9.14035 4.47187 8.87223 4.29375C8.53848 4.0725 8.11848 4.02562 7.7266 4.0425C7.49598 4.05375 7.31598 4.17 7.1041 4.23375C6.85848 4.30875 6.73285 4.22437 6.49848 4.18312C6.29035 4.1475 6.0616 4.1775 5.85535 4.22438C5.7691 4.24313 5.68848 4.28438 5.60973 4.33125Z"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask0_114_1321)">
      <Path
        d="M13.6311 6.825C13.5223 7.14938 13.2355 7.40813 12.9017 7.48125C12.568 7.55438 12.1986 7.44188 11.9642 7.1925C11.833 7.33688 11.5367 7.15313 11.4392 7.20563C11.3417 7.25813 11.1055 7.82063 10.7736 7.81688C10.5505 8.03813 10.2036 8.12438 9.90172 8.03625C9.59984 7.94813 9.42734 7.36688 9.28672 7.38C9.14609 7.39313 9.04859 7.5825 8.89672 7.57875C8.82172 7.57688 8.74297 7.55625 8.66984 7.57688C8.51984 7.61813 8.45797 7.80188 8.32297 7.87875C8.19359 7.95188 8.03047 7.91063 7.88422 7.94438C7.79047 7.965 7.70797 8.0175 7.62172 8.05875C7.27859 8.22375 6.86234 8.22938 6.51547 8.07188C6.34212 7.99167 6.18818 7.87489 6.06422 7.72957C5.94026 7.58425 5.84922 7.41383 5.79734 7.23C5.56484 7.4475 5.00609 7.56563 4.84672 7.50188C4.68547 7.43813 4.49234 7.755 4.26922 7.77563C4.03297 7.79813 3.78922 7.82063 3.56047 7.75688C3.33172 7.69313 3.11609 7.5225 3.07109 7.28813C2.95109 7.58438 2.78234 7.86188 2.57422 8.10563C3.37109 8.57625 4.16797 9.04875 4.96484 9.51938C5.07359 9.58313 5.18422 9.65063 5.26484 9.74813C5.45047 9.975 5.42984 10.3181 5.60797 10.5506C5.79922 10.7981 6.14797 10.8413 6.45734 10.8638C6.75547 10.8863 7.05359 10.9088 7.35359 10.9331C7.49234 10.9444 7.63859 10.9556 7.75484 11.0325C8.07922 11.2406 7.99109 11.7656 8.24797 12.0525C8.44672 12.2719 8.78047 12.285 9.07484 12.2794C9.90547 12.2663 10.738 12.2438 11.5686 12.2138C11.6455 12.2119 11.7261 12.2081 11.7973 12.1781C11.8967 12.1369 11.968 12.0525 12.0373 11.9719C12.599 11.3243 13.2522 10.7622 13.9761 10.3031C14.1598 10.1869 14.353 10.0725 14.4748 9.89438C14.5855 9.735 14.6286 9.53813 14.6698 9.34875C14.713 9.14625 14.758 8.94188 14.8011 8.73938C14.8198 8.655 14.8386 8.56688 14.8217 8.48063C14.7992 8.3625 14.7148 8.26688 14.638 8.17313C14.4401 7.93086 14.2807 7.65955 14.1655 7.36875C14.1111 7.23 14.0642 7.08563 13.9723 6.9675C13.8805 6.85125 13.7267 6.76688 13.5823 6.80625"
        fill="#E2D2BA"
      />
    </G>
    <Path
      d="M9.53067 9.38813C9.7463 9.61875 9.74442 9.97875 9.7313 10.2994C9.71817 10.6313 9.75942 11.2425 9.98442 11.2256C10.1419 11.1938 10.1907 10.9988 10.2094 10.8394C10.2544 10.4475 10.2994 10.0406 10.1719 9.6675C10.1157 9.50438 10.0219 9.345 9.87567 9.25688C9.74255 9.17813 9.36192 9.12375 9.53067 9.38813Z"
      fill="#F7EFDA"
    />
    <Path
      d="M19.3709 9.82125L19.9803 9.7725L21.0096 18.6994C21.2028 20.1938 19.1065 21.045 17.0721 21.3094L15.6509 10.3031L19.3709 9.82125ZM11.9271 10.7813L11.3271 10.8881L12.5984 19.7831C12.7915 21.2775 15.034 21.57 17.0703 21.3056L15.649 10.2994L11.9271 10.7813Z"
      fill="#E0E0E0"
    />
    <Path
      d="M15.5174 9.29062C16.5993 9.15187 17.6268 9.14438 18.4124 9.27188C19.0855 9.38063 19.5055 9.585 19.5355 9.81375C19.5655 10.0444 19.2111 10.3463 18.5868 10.6237C17.8593 10.9463 16.8636 11.2013 15.7836 11.34C14.7036 11.4787 13.6743 11.4863 12.8905 11.3588C12.2174 11.25 11.7974 11.0456 11.7674 10.8169C11.7374 10.5862 12.0918 10.2844 12.7161 10.0069C13.4399 9.68437 14.4374 9.43125 15.5174 9.29062Z"
      fill="#FAFAFA"
    />
    <Path
      d="M19.5486 13.2638L20.1486 18.225C20.1524 18.5081 19.9593 18.8044 19.6649 18.9881C19.1399 19.3162 18.0824 19.7081 16.8768 19.8638C15.7236 20.0119 14.7149 19.9088 14.113 19.7419C13.7324 19.635 13.4024 19.3669 13.3255 19.1081L12.6299 14.1544"
      fill="#FBCC2F"
    />
    <Path
      d="M16.1997 14.5648C18.1109 14.318 19.6109 13.7357 19.5501 13.2643C19.4892 12.7929 17.8904 12.6109 15.9792 12.8578C14.0679 13.1046 12.5679 13.6869 12.6288 14.1583C12.6897 14.6297 14.2884 14.8117 16.1997 14.5648Z"
      fill="#E5A315"
    />
    <Path
      d="M11.3227 10.875C11.2308 10.1681 13.0233 9.39563 15.489 9.07688C17.9565 8.75813 19.884 9.05063 19.9758 9.7575C20.0677 10.4644 18.2752 11.2369 15.8096 11.5556C13.344 11.8744 11.4146 11.5819 11.3227 10.875ZM12.714 10.0069C12.0896 10.2844 11.7352 10.5862 11.7652 10.8169C11.7952 11.0475 12.2152 11.25 12.8883 11.3588C13.674 11.4863 14.7015 11.4787 15.7815 11.34C16.8615 11.2013 17.859 10.9463 18.5846 10.6238C19.209 10.3463 19.5633 10.0444 19.5333 9.81375C19.5033 9.58313 19.0833 9.38063 18.4102 9.27188C17.6246 9.14438 16.5971 9.15187 15.5152 9.29063C14.4333 9.42937 13.4396 9.68437 12.714 10.0069Z"
      fill="#CECFD1"
    />
    <Path
      d="M15.217 19.3651C15.3084 19.3533 15.373 19.2696 15.3612 19.1782C15.3494 19.0868 15.2657 19.0223 15.1743 19.0341C15.0829 19.0459 15.0184 19.1296 15.0302 19.221C15.042 19.3124 15.1256 19.3769 15.217 19.3651Z"
      fill="#E5A315"
    />
    <Path
      d="M14.7863 18.906C14.8489 18.8979 14.8932 18.8406 14.8851 18.7779C14.877 18.7153 14.8196 18.671 14.757 18.6791C14.6943 18.6872 14.6501 18.7446 14.6582 18.8072C14.6663 18.8699 14.7236 18.9141 14.7863 18.906Z"
      fill="#E5A315"
    />
    <Path
      d="M15.5008 18.686C15.6117 18.6717 15.69 18.5702 15.6757 18.4593C15.6613 18.3484 15.5598 18.2701 15.4489 18.2844C15.338 18.2987 15.2597 18.4002 15.274 18.5112C15.2883 18.6221 15.3898 18.7004 15.5008 18.686Z"
      fill="#E5A315"
    />
    <Path
      d="M14.7802 18.5753C14.8942 18.5606 14.9747 18.4563 14.96 18.3423C14.9453 18.2283 14.8409 18.1478 14.7269 18.1625C14.6129 18.1773 14.5324 18.2816 14.5472 18.3956C14.5619 18.5096 14.6662 18.5901 14.7802 18.5753Z"
      fill="#E5A315"
    />
    <Path
      d="M15.3225 17.5687C15.4139 17.5569 15.4784 17.4732 15.4666 17.3818C15.4548 17.2904 15.3712 17.2259 15.2798 17.2377C15.1884 17.2495 15.1238 17.3332 15.1356 17.4246C15.1474 17.516 15.2311 17.5805 15.3225 17.5687Z"
      fill="#E5A315"
    />
    <Path
      d="M14.8938 17.6851C14.975 17.6746 15.0322 17.6004 15.0218 17.5192C15.0113 17.4381 14.937 17.3808 14.8559 17.3913C14.7748 17.4018 14.7175 17.476 14.728 17.5572C14.7384 17.6383 14.8127 17.6956 14.8938 17.6851Z"
      fill="#E5A315"
    />
    <Path
      d="M14.1477 16.8189C14.2289 16.8084 14.2862 16.7341 14.2757 16.653C14.2652 16.5718 14.1909 16.5146 14.1098 16.525C14.0287 16.5355 13.9714 16.6098 13.9819 16.6909C13.9923 16.7721 14.0666 16.8293 14.1477 16.8189Z"
      fill="#E5A315"
    />
    <Path
      d="M15.4498 15.8005C15.5525 15.7872 15.625 15.6932 15.6117 15.5905C15.5985 15.4878 15.5045 15.4153 15.4018 15.4286C15.2991 15.4419 15.2266 15.5359 15.2398 15.6386C15.2531 15.7413 15.3471 15.8138 15.4498 15.8005Z"
      fill="#E5A315"
    />
    <Path
      d="M14.6966 17.3132C14.8219 17.297 14.9104 17.1823 14.8942 17.0571C14.878 16.9318 14.7633 16.8433 14.638 16.8595C14.5127 16.8757 14.4243 16.9904 14.4404 17.1157C14.4566 17.241 14.5713 17.3294 14.6966 17.3132Z"
      fill="#E5A315"
    />
    <Path
      d="M15.1997 16.5332C15.323 16.5173 15.41 16.4045 15.3941 16.2813C15.3781 16.158 15.2653 16.071 15.1421 16.0869C15.0189 16.1029 14.9318 16.2157 14.9478 16.3389C14.9637 16.4622 15.0765 16.5492 15.1997 16.5332Z"
      fill="#E5A315"
    />
    <Path
      d="M14.3977 16.3031C14.4891 16.2913 14.5536 16.2077 14.5418 16.1163C14.53 16.0249 14.4464 15.9603 14.355 15.9721C14.2635 15.9839 14.199 16.0676 14.2108 16.159C14.2226 16.2504 14.3063 16.3149 14.3977 16.3031Z"
      fill="#E5A315"
    />
    <Path
      d="M23.5815 13.9406C23.2984 11.0531 22.3027 10.68 21.4196 10.6425C20.3865 10.5975 20.049 10.2994 20.049 10.2994L19.3965 10.9144L19.884 14.9494L20.2852 18.0525L20.9771 18.4163C20.9771 18.4163 20.9302 18.0656 22.1565 17.6044C23.5646 17.0719 23.829 16.4587 23.5815 13.9406ZM21.6596 16.0312C20.8984 16.1287 20.739 15.2888 20.604 14.2463C20.469 13.2038 20.3602 12.3562 21.1721 12.2512C21.984 12.1462 22.0927 12.9938 22.2277 14.0363C22.3609 15.0788 22.4696 15.9262 21.6596 16.0312Z"
      fill="#E0E0E0"
    />
    <Path
      d="M20.2091 19.2525C20.1604 19.4606 19.956 19.86 19.2922 20.2012C18.8835 20.4112 18.2722 20.625 17.751 20.6269C17.6385 20.6269 17.6629 20.5162 17.736 20.4956C18.1579 20.3737 18.5647 20.2144 19.0391 19.9631C19.6579 19.635 20.0516 19.2431 20.1079 19.1944C20.2054 19.11 20.2185 19.2188 20.2091 19.2525ZM21.4316 11.0569C21.801 11.0719 22.056 11.1769 22.3297 11.4244C22.5172 11.5931 22.7891 11.9794 22.8229 12.3638C22.8247 12.3938 22.8304 12.555 22.7629 12.5569C22.6579 12.5606 22.6147 12.4369 22.5979 12.3844C22.5454 12.2119 22.2922 11.7806 22.1422 11.6494C21.8572 11.3963 21.5141 11.37 21.3735 11.34C21.2891 11.3231 21.0697 11.2481 21.0772 11.1731C21.0885 11.0513 21.3547 11.0531 21.4316 11.0569Z"
      fill="white"
    />
    <Path
      d="M18.1823 6.8175C18.3229 6.89625 18.4579 6.99375 18.6173 7.02C18.8854 7.065 19.1479 6.9225 19.431 6.99563C20.2316 7.20188 20.6685 7.78313 20.4848 8.58188C20.4229 8.85 20.5373 8.95875 20.6366 9.20062C20.9085 9.86625 20.5391 10.7981 19.7891 10.98C19.341 11.0888 18.8741 10.9294 18.4354 11.0344C18.066 11.1225 17.9179 11.4956 17.6029 11.6663C17.3066 11.8294 16.9598 11.9062 16.626 11.9381C16.176 11.9812 15.546 11.7094 15.1766 12.0844C14.6066 12.6637 15.1523 13.6387 14.4529 14.1881C14.166 14.4131 13.7366 14.4244 13.4198 14.2762C12.8085 13.9931 12.8479 13.2375 12.6135 12.7087C12.5516 12.5681 12.4766 12.4425 12.3341 12.3694C12.1916 12.2963 12.051 12.3394 11.901 12.3019C11.6985 12.2513 11.5035 12.1725 11.3385 12.045C11.1454 11.895 11.2279 11.5594 10.9354 11.5406C10.8454 11.535 10.7254 11.4994 10.6504 11.4581C10.2454 11.2275 10.0916 10.6781 10.311 10.2675C10.3916 10.1175 10.461 10.0688 10.461 9.89438C10.461 9.73688 10.4085 9.6075 10.4479 9.44062C10.5416 9.03187 10.866 8.74125 11.2485 8.58375C11.3198 8.55375 11.3948 8.5275 11.4698 8.505C11.5954 8.46563 11.7004 8.44687 11.7848 8.34C11.8298 8.28562 11.8598 8.21063 11.8879 8.14688C11.9685 7.97438 12.0866 7.83 12.2198 7.69687C12.6173 7.29937 13.1948 7.14563 13.7498 7.14938C13.8998 7.14938 14.0366 7.18313 14.1848 7.21688C14.5541 7.29938 14.661 7.05 14.9235 6.86438C15.2498 6.63375 15.6698 6.57562 16.0616 6.58125C16.2923 6.585 16.476 6.6975 16.6898 6.75562C16.9373 6.825 17.061 6.735 17.2935 6.68812C17.5016 6.64687 17.7304 6.67125 17.9366 6.7125C18.021 6.73312 18.1035 6.7725 18.1823 6.8175Z"
      fill="#E9E2CF"
    />
    <Mask
      id="mask1_114_1321"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={10}
      y={6}
      width={11}
      height={9}>
      <Path
        d="M18.1823 6.8175C18.3229 6.89625 18.4579 6.99375 18.6173 7.02C18.8854 7.065 19.1479 6.9225 19.431 6.99563C20.2316 7.20188 20.6685 7.78313 20.4848 8.58188C20.4229 8.85 20.5373 8.95875 20.6366 9.20062C20.9085 9.86625 20.5391 10.7981 19.7891 10.98C19.341 11.0888 18.8741 10.9294 18.4354 11.0344C18.066 11.1225 17.9179 11.4956 17.6029 11.6663C17.3066 11.8294 16.9598 11.9062 16.626 11.9381C16.176 11.9812 15.546 11.7094 15.1766 12.0844C14.6066 12.6637 15.1523 13.6387 14.4529 14.1881C14.166 14.4131 13.7366 14.4244 13.4198 14.2762C12.8085 13.9931 12.8479 13.2375 12.6135 12.7087C12.5516 12.5681 12.4766 12.4425 12.3341 12.3694C12.1916 12.2963 12.051 12.3394 11.901 12.3019C11.6985 12.2513 11.5035 12.1725 11.3385 12.045C11.1454 11.895 11.2279 11.5594 10.9354 11.5406C10.8454 11.535 10.7254 11.4994 10.6504 11.4581C10.2454 11.2275 10.0916 10.6781 10.311 10.2675C10.3916 10.1175 10.461 10.0688 10.461 9.89438C10.461 9.73688 10.4085 9.6075 10.4479 9.44062C10.5416 9.03187 10.866 8.74125 11.2485 8.58375C11.3198 8.55375 11.3948 8.5275 11.4698 8.505C11.5954 8.46563 11.7004 8.44687 11.7848 8.34C11.8298 8.28562 11.8598 8.21063 11.8879 8.14688C11.9685 7.97438 12.0866 7.83 12.2198 7.69687C12.6173 7.29937 13.1948 7.14563 13.7498 7.14938C13.8998 7.14938 14.0366 7.18313 14.1848 7.21688C14.5541 7.29938 14.661 7.05 14.9235 6.86438C15.2498 6.63375 15.6698 6.57562 16.0616 6.58125C16.2923 6.585 16.476 6.6975 16.6898 6.75562C16.9373 6.825 17.061 6.735 17.2935 6.68812C17.5016 6.64687 17.7304 6.67125 17.9366 6.7125C18.021 6.73312 18.1035 6.7725 18.1823 6.8175Z"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask1_114_1321)">
      <Path
        d="M10.2338 9.53625C10.3519 9.85688 10.6463 10.1081 10.9819 10.1719C11.3176 10.2356 11.6851 10.1119 11.9119 9.85688C12.0469 9.9975 12.3394 9.80625 12.4369 9.85688C12.5344 9.9075 12.7876 10.4625 13.1194 10.4494C13.3501 10.6631 13.6988 10.7419 13.9969 10.6444C14.2951 10.5469 14.4526 9.96188 14.5932 9.97125C14.7338 9.98063 14.8369 10.1681 14.9888 10.1588C15.0638 10.155 15.1407 10.1325 15.2157 10.1494C15.3676 10.185 15.4351 10.3688 15.5719 10.4419C15.7032 10.5113 15.8663 10.4663 16.0126 10.4944C16.1063 10.5131 16.1907 10.5619 16.2788 10.6013C16.6257 10.7569 17.0438 10.7494 17.3851 10.5825C17.5564 10.4977 17.7072 10.3767 17.827 10.2277C17.9468 10.0788 18.0327 9.90552 18.0788 9.72C18.3169 9.93188 18.8776 10.0331 19.0369 9.96563C19.1963 9.89813 19.3988 10.2075 19.6219 10.2225C19.8601 10.2394 20.1038 10.2544 20.3307 10.1831C20.5576 10.1119 20.7676 9.93563 20.8069 9.70125C20.9363 9.99375 21.1126 10.2656 21.3263 10.5038C20.5426 10.9969 19.7607 11.4919 18.9769 11.985C18.8701 12.0525 18.7613 12.1219 18.6844 12.2213C18.5063 12.4538 18.5363 12.795 18.3638 13.0331C18.1801 13.2844 17.8332 13.3388 17.5219 13.3706C17.2238 13.4025 16.9257 13.4325 16.6294 13.4644C16.4907 13.4794 16.3463 13.4963 16.2301 13.575C15.9132 13.7925 16.0144 14.3138 15.7651 14.6081C15.5738 14.8331 15.2401 14.8556 14.9438 14.8575C14.1132 14.8669 13.2807 14.8688 12.4501 14.8631C12.3732 14.8631 12.2926 14.8613 12.2194 14.8331C12.1201 14.7956 12.0451 14.7131 11.9738 14.6344C11.3936 14.0035 10.7247 13.4603 9.98818 13.0219C9.80256 12.9113 9.60568 12.8025 9.47818 12.6281C9.36381 12.4706 9.31318 12.2775 9.26818 12.0881C9.21756 11.8856 9.16881 11.6831 9.11818 11.4825C9.09756 11.3981 9.07693 11.31 9.09006 11.2238C9.10881 11.1038 9.19131 11.0063 9.26631 10.9106C9.45756 10.6631 9.60943 10.3856 9.71631 10.0931C9.76693 9.9525 9.81006 9.80625 9.89818 9.68813C9.98631 9.56813 10.1382 9.48 10.2826 9.51563"
        fill="#E2D2BA"
      />
    </G>
    <Path
      d="M14.4078 11.9831C14.1997 12.2194 14.2109 12.5794 14.2334 12.9C14.2559 13.2319 14.2334 13.8431 14.0065 13.8337C13.849 13.8056 13.7947 13.6125 13.7703 13.4531C13.714 13.0631 13.6578 12.6581 13.774 12.2812C13.8247 12.1163 13.9147 11.955 14.059 11.8612C14.1884 11.7787 14.5672 11.7131 14.4078 11.9831Z"
      fill="#F7EFDA"
    />
  </Svg>
);
export default BeerIcon;
