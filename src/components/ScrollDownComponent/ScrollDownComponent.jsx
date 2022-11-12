import { motion } from "framer-motion"

export default function ScrollDownComponent({
  height,
  width,
}) {
  const transitionPath = {
    duration: 8,
    repeat: Infinity,
    type: "spring",
    damping: 1,
    stiffness: 10,
    restDelta: 0.001,
  }

  const transitionOpacity = { duration: 2, ease: "easeInOut" }
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 70 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.circle
        initial={{ pathLength: 0.6, pathOffset: 0 }}
        animate={{ pathLength: 1, pathOffset: 1 }}
        transition={transitionPath}
        cx="35"
        cy="215"
        r="34.5"
        stroke="#444"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transitionOpacity}
        d="M34.6464 215.354C34.8417 215.549 35.1583 215.549 35.3536 215.354L38.5355 212.172C38.7308 211.976 38.7308 211.66 38.5355 211.464C38.3403 211.269 38.0237 211.269 37.8284 211.464L35 214.293L32.1716 211.464C31.9763 211.269 31.6597 211.269 31.4645 211.464C31.2692 211.66 31.2692 211.976 31.4645 212.172L34.6464 215.354ZM34.5 0L34.5 215H35.5L35.5 0L34.5 0Z"
        fill="#444"
      />
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transitionOpacity}
        d="M24.0851 70.826C23.9028 70.8243 23.7338 70.8638 23.5781 70.9444C23.4179 71.0205 23.2729 71.181 23.1431 71.4259C23.0088 71.6662 22.8916 72.0298 22.7915 72.5165C22.7012 72.9259 22.5953 73.2964 22.4738 73.628C22.3524 73.955 22.2063 74.234 22.0356 74.4649C21.865 74.6912 21.6652 74.8649 21.4362 74.9859C21.2072 75.1069 20.9401 75.166 20.6348 75.1633C20.3431 75.1606 20.068 75.0944 19.8094 74.9644C19.5508 74.8299 19.3223 74.6433 19.1239 74.4045C18.9256 74.1612 18.771 73.8704 18.6601 73.5321C18.5492 73.1939 18.4956 72.8174 18.4994 72.4027C18.5047 71.8103 18.614 71.3054 18.8274 70.888C19.0408 70.4707 19.324 70.1519 19.6769 69.9318C20.0253 69.7116 20.4113 69.6034 20.8351 69.6072L20.8238 70.8718C20.6187 70.87 20.4199 70.9297 20.2274 71.051C20.0304 71.1677 19.867 71.3417 19.7373 71.573C19.6077 71.7997 19.5414 72.0794 19.5384 72.4121C19.5352 72.763 19.5873 73.0483 19.6947 73.268C19.7976 73.4831 19.9306 73.6416 20.0938 73.7433C20.257 73.8405 20.4297 73.8899 20.612 73.8915C20.7487 73.8927 20.872 73.8711 20.9818 73.8265C21.087 73.7773 21.1858 73.6916 21.278 73.5694C21.3657 73.4471 21.4493 73.2747 21.5288 73.0521C21.6083 72.8295 21.6883 72.5453 21.7689 72.1997C21.9111 71.5948 22.0796 71.0973 22.2745 70.7071C22.4694 70.3169 22.7068 70.0274 22.9865 69.8385C23.2662 69.6496 23.6043 69.5569 24.0007 69.5605C24.3243 69.5634 24.6199 69.6344 24.8875 69.7736C25.1552 69.9081 25.3859 70.1039 25.5795 70.3609C25.7687 70.6132 25.9164 70.9153 26.0226 71.2672C26.1243 71.6145 26.1732 72.0046 26.1693 72.4375C26.1634 73.0892 26.0422 73.6396 25.8058 74.0886C25.5693 74.5377 25.2655 74.8768 24.8942 75.1059C24.523 75.335 24.1323 75.4477 23.7222 75.444L23.7336 74.1725C24.0801 74.1574 24.3568 74.0596 24.5635 73.8792C24.7656 73.6987 24.9112 73.4767 25.0001 73.2132C25.0845 72.9496 25.1279 72.6879 25.1303 72.4282C25.1334 72.0819 25.0904 71.7921 25.0013 71.5588C24.9123 71.321 24.7886 71.1399 24.6302 71.0154C24.4719 70.891 24.2901 70.8278 24.0851 70.826ZM25.1975 64.95C25.2002 64.6492 25.1412 64.3707 25.0205 64.1144C24.8997 63.8581 24.733 63.6469 24.5203 63.4809C24.303 63.3149 24.0555 63.2193 23.7777 63.194L23.7885 61.9909C24.2258 62.0176 24.6324 62.1694 25.0081 62.4462C25.3794 62.7185 25.6793 63.0744 25.9077 63.5139C26.1317 63.9535 26.2413 64.4353 26.2365 64.9593C26.2315 65.5153 26.1292 65.9997 25.9295 66.4127C25.7299 66.8211 25.4579 67.1604 25.1137 67.4308C24.7695 67.6966 24.3757 67.8958 23.9325 68.0286C23.4847 68.1567 23.0124 68.2185 22.5157 68.2141L22.2286 68.2115C21.7319 68.207 21.2631 68.1367 20.8223 68.0006C20.3769 67.8599 19.9845 67.6535 19.6452 67.3816C19.3058 67.1051 19.04 66.7609 18.8478 66.349C18.6555 65.9325 18.5619 65.4463 18.5669 64.8903C18.5721 64.3116 18.6952 63.8068 18.936 63.376C19.1724 62.9452 19.4944 62.6085 19.9022 62.3661C20.3055 62.1191 20.7624 61.9865 21.273 61.9683L21.2622 63.1713C20.9567 63.1914 20.6802 63.2755 20.4327 63.4237C20.1854 63.5673 19.9876 63.766 19.8395 64.0199C19.6868 64.2692 19.609 64.5625 19.606 64.8997C19.6025 65.287 19.677 65.6136 19.8296 65.8793C19.9776 66.1404 20.1808 66.3496 20.4392 66.5068C20.693 66.6595 20.9769 66.7715 21.2907 66.8426C21.6 66.9092 21.9164 66.944 22.24 66.9469L22.5271 66.9495C22.8506 66.9524 23.1699 66.9234 23.4849 66.8624C23.8 66.8014 24.0857 66.6969 24.3423 66.5488C24.5989 66.3962 24.8058 66.1906 24.9631 65.9323C25.1159 65.6693 25.194 65.3419 25.1975 64.95ZM19.9164 59.2694L26.1505 59.3255L26.1391 60.5901L18.7429 60.5236L18.754 59.2932L19.9164 59.2694ZM18.7341 56.9482L19.9098 56.9656C19.886 57.0702 19.8715 57.1703 19.866 57.266C19.8561 57.357 19.8506 57.4618 19.8495 57.5803C19.8469 57.8719 19.8902 58.1298 19.9793 58.3539C20.0684 58.5781 20.1943 58.7683 20.357 58.9247C20.5197 59.0812 20.7145 59.206 20.9416 59.2992C21.1641 59.3878 21.4096 59.4469 21.6783 59.4767L21.8801 59.834C21.4335 59.83 21.0147 59.7829 20.6235 59.6928C20.2325 59.5981 19.8874 59.456 19.5883 59.2665C19.2846 59.0769 19.0498 58.8378 18.8838 58.5492C18.7132 58.256 18.6297 57.9088 18.6334 57.5078C18.6342 57.4167 18.6465 57.312 18.6704 57.1937C18.6897 57.0754 18.7109 56.9935 18.7341 56.9482ZM22.5615 56.2853L22.4043 56.2839C21.8711 56.2791 21.3774 56.1972 20.923 56.0381C20.4642 55.879 20.0674 55.6522 19.7328 55.3575C19.3937 55.0627 19.1325 54.7072 18.9494 54.2908C18.7617 53.8744 18.6702 53.4087 18.6749 52.8937C18.6795 52.3742 18.7794 51.908 18.9746 51.495C19.1652 51.0774 19.4327 50.7244 19.7771 50.4358C20.117 50.1426 20.5178 49.9206 20.9794 49.7698C21.4365 49.619 21.9317 49.546 22.4649 49.5508L22.6221 49.5522C23.1553 49.557 23.649 49.6389 24.1033 49.7979C24.5576 49.957 24.9544 50.1861 25.2935 50.4854C25.6281 50.7801 25.8892 51.1357 26.0769 51.5521C26.26 51.9639 26.3493 52.4296 26.3446 52.9491C26.3399 53.4686 26.2423 53.9348 26.0517 54.3479C25.8566 54.7608 25.5891 55.1139 25.2492 55.4071C24.9048 55.6957 24.504 55.9154 24.0469 56.0662C23.5898 56.2171 23.0947 56.2901 22.5615 56.2853ZM22.4157 55.0193L22.5729 55.0207C22.942 55.024 23.291 54.9839 23.6199 54.9002C23.9442 54.8166 24.2325 54.6893 24.4847 54.5183C24.7369 54.3429 24.9372 54.1236 25.0854 53.8606C25.229 53.5976 25.3024 53.2906 25.3056 52.9397C25.3087 52.5934 25.2408 52.2897 25.1019 52.0287C24.9584 51.7631 24.7621 51.5425 24.5131 51.3671C24.264 51.1917 23.978 51.0592 23.6553 50.9697C23.328 50.8756 22.9798 50.8269 22.6106 50.8236L22.4534 50.8222C22.0889 50.8189 21.7444 50.8614 21.42 50.9496C21.0911 51.0332 20.8005 51.1628 20.5483 51.3383C20.2916 51.5091 20.0891 51.7261 19.9409 51.9891C19.7927 52.2475 19.717 52.5522 19.7139 52.9031C19.7108 53.2494 19.7809 53.5554 19.9244 53.821C20.0679 54.0821 20.2664 54.3027 20.52 54.4827C20.7691 54.6581 21.0573 54.7906 21.3846 54.8801C21.7074 54.9696 22.0511 55.016 22.4157 55.0193ZM15.7652 46.5304L26.2648 46.6249L26.2533 47.8963L15.7538 47.8018L15.7652 46.5304ZM15.7958 43.1262L26.2954 43.2207L26.284 44.4921L15.7844 44.3977L15.7958 43.1262ZM24.9514 33.0432L15.8873 32.9616L15.8987 31.6902L26.3983 31.7846L26.3878 32.9467L24.9514 33.0432ZM22.726 37.9999L22.5825 37.9986C22.0174 37.9935 21.5053 37.9206 21.0463 37.7797C20.5827 37.6342 20.1858 37.4324 19.8554 37.1742C19.5251 36.9115 19.2726 36.6016 19.0981 36.2445C18.9191 35.8829 18.8315 35.481 18.8355 35.039C18.8397 34.5742 18.9254 34.1693 19.0925 33.8245C19.2552 33.475 19.4925 33.1809 19.8046 32.9422C20.1121 32.6988 20.483 32.5085 20.9172 32.3711C21.3514 32.2337 21.8422 32.1401 22.3895 32.0904L23.0184 32.096C23.5602 32.151 24.047 32.2534 24.4786 32.4031C24.9102 32.5483 25.2776 32.7453 25.5807 32.9941C25.8839 33.2384 26.1159 33.5367 26.2768 33.8891C26.4331 34.2414 26.5092 34.6523 26.505 35.1217C26.5011 35.5546 26.4041 35.9502 26.214 36.3086C26.024 36.6623 25.7592 36.9676 25.4196 37.2243C25.0801 37.4765 24.6818 37.6711 24.2249 37.8083C23.7634 37.9409 23.2637 38.0047 22.726 37.9999ZM22.5939 36.7272L22.7374 36.7285C23.1066 36.7318 23.4532 36.6984 23.7775 36.6284C24.1017 36.5539 24.3876 36.438 24.6351 36.2807C24.8826 36.1234 25.0781 35.9223 25.2216 35.6775C25.3605 35.4327 25.4315 35.1394 25.4346 34.7976C25.4384 34.3783 25.3526 34.0335 25.1773 33.763C25.002 33.488 24.7693 33.2671 24.4791 33.1004C24.189 32.9338 23.8734 32.8033 23.5324 32.7091L21.885 32.6943C21.6339 32.7467 21.3917 32.8243 21.1583 32.927C20.9204 33.0251 20.7096 33.1554 20.5259 33.3178C20.3376 33.4756 20.1877 33.6725 20.0762 33.9085C19.9647 34.1399 19.9076 34.4152 19.9047 34.7342C19.9016 35.0805 19.9718 35.3796 20.1154 35.6316C20.2544 35.8789 20.4486 36.0835 20.6978 36.2453C20.9424 36.407 21.2284 36.528 21.5559 36.6085C21.8788 36.6843 22.2248 36.7239 22.5939 36.7272ZM22.7969 30.1184L22.6397 30.117C22.1065 30.1122 21.6128 30.0303 21.1584 29.8712C20.6996 29.7121 20.3028 29.4852 19.9682 29.1906C19.6291 28.8958 19.3679 28.5403 19.1848 28.1239C18.9972 27.7075 18.9056 27.2418 18.9103 26.7268C18.9149 26.2073 19.0149 25.7411 19.21 25.3281C19.4006 24.9105 19.6681 24.5575 20.0125 24.2689C20.3524 23.9757 20.7532 23.7537 21.2148 23.6029C21.6719 23.4521 22.1671 23.379 22.7003 23.3838L22.8575 23.3853C23.3907 23.3901 23.8844 23.472 24.3387 23.631C24.7931 23.7901 25.1898 24.0192 25.5289 24.3185C25.8635 24.6132 26.1246 24.9687 26.3123 25.3852C26.4954 25.797 26.5847 26.2627 26.58 26.7822C26.5753 27.3017 26.4777 27.7679 26.2871 28.181C26.092 28.5939 25.8245 28.947 25.4846 29.2402C25.1402 29.5288 24.7394 29.7485 24.2823 29.8993C23.8252 30.0502 23.3301 30.1232 22.7969 30.1184ZM22.6511 28.8524L22.8083 28.8538C23.1774 28.8571 23.5264 28.8169 23.8553 28.7333C24.1796 28.6496 24.4679 28.5223 24.7201 28.3514C24.9724 28.176 25.1726 27.9567 25.3208 27.6937C25.4644 27.4307 25.5378 27.1237 25.541 26.7728C25.5441 26.4265 25.4762 26.1228 25.3373 25.8618C25.1938 25.5961 24.9975 25.3756 24.7485 25.2002C24.4994 25.0248 24.2135 24.8923 23.8907 24.8028C23.5634 24.7087 23.2152 24.66 22.846 24.6567L22.6888 24.6553C22.3243 24.652 21.9798 24.6945 21.6554 24.7827C21.3265 24.8663 21.036 24.9959 20.7837 25.1714C20.527 25.3422 20.3245 25.5592 20.1763 25.8222C20.0281 26.0806 19.9525 26.3853 19.9493 26.7362C19.9462 27.0825 20.0163 27.3885 20.1598 27.6541C20.3033 27.9152 20.5018 28.1357 20.7554 28.3158C21.0045 28.4912 21.2927 28.6237 21.6201 28.7132C21.9428 28.8027 22.2865 28.8491 22.6511 28.8524ZM25.1922 19.9471L19.1256 17.9921L19.1331 17.1581L20.3415 17.3331L26.5104 19.3232L26.5031 20.1367L25.1922 19.9471ZM19.097 21.1707L25.2637 19.606L26.5088 19.501L26.5011 20.3554L19.0856 22.4353L19.097 21.1707ZM25.2537 15.3948L19.1633 13.795L19.1747 12.5372L26.5515 14.7502L26.5439 15.5978L25.2537 15.3948ZM19.1347 16.9736L25.1327 15.1681L26.5496 14.9689L26.5423 15.7755L20.3245 17.7089L19.1267 17.8622L19.1347 16.9736ZM20.7768 9.98807L26.5939 10.0404L26.5825 11.305L19.1863 11.2385L19.1971 10.0422L20.7768 9.98807ZM22.6128 10.3054L22.5876 10.8315C22.0818 10.8224 21.6154 10.743 21.1883 10.5934C20.7567 10.4436 20.3826 10.2352 20.066 9.968C19.7493 9.70082 19.5061 9.38416 19.3362 9.01804C19.1618 8.64731 19.0766 8.23865 19.0806 7.79205C19.0839 7.42749 19.137 7.09983 19.2399 6.80907C19.3382 6.51828 19.4954 6.27131 19.7114 6.06817C19.9275 5.86047 20.2069 5.70347 20.5496 5.59717C20.8879 5.49084 21.3008 5.43986 21.7884 5.44425L26.6349 5.48785L26.6234 6.75928L21.7633 6.71556C21.3759 6.71207 21.0655 6.76625 20.8321 6.87809C20.5941 6.98988 20.4217 7.15468 20.3149 7.37248C20.2036 7.59023 20.1465 7.85861 20.1436 8.17761C20.1408 8.49205 20.2043 8.77974 20.3341 9.04069C20.4639 9.29707 20.6442 9.51973 20.875 9.70866C21.1057 9.89304 21.371 10.039 21.6709 10.1465C21.9662 10.2494 22.2802 10.3024 22.6128 10.3054ZM25.9824 3.5405C25.7682 3.53857 25.5888 3.47087 25.4442 3.3374C25.295 3.19934 25.2216 3.0027 25.2239 2.74751C25.2262 2.49231 25.3031 2.29931 25.4547 2.16851C25.6018 2.0331 25.7824 1.96637 25.9966 1.96829C26.2062 1.97018 26.3833 2.04013 26.5279 2.17816C26.6725 2.31163 26.7437 2.50596 26.7414 2.76116C26.7391 3.01636 26.6645 3.21166 26.5174 3.34706C26.3704 3.4779 26.1921 3.54238 25.9824 3.5405Z"
        fill="#444"
      />
    </svg>
  )
}
