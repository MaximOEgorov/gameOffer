
export function Win(parentEl) {
    const containerElement = document.createElement('div');
    containerElement.classList.add('win')
    containerElement.classList.add('display__none')
    containerElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="427" viewBox="0 -100 300 527" y="400" fill="none">\n' +
        '    <g filter="url(#filter0_d_22_4735)">\n' +
        '        <path fill-rule="evenodd" clip-rule="evenodd"\n' +
        '              d="M76.6047 15.4657C75.0482 11.1502 71.1125 8 66.5249 8H20C14.4771 8 10 12.4771 10 18V405C10 410.523 14.4771 415 20 415H280C285.523 415 290 410.523 290 405V18C290 12.4772 285.523 8 280 8H233.475C228.887 8 224.952 11.1502 223.395 15.4657C212.557 45.5172 183.787 67 150 67C116.213 67 87.4428 45.5172 76.6047 15.4657Z"\n' +
        '              fill="white"/>\n' +
        '    </g>\n' +
        '    <defs>\n' +
        '        <filter id="filter0_d_22_4735" x="0" y="0" width="300" height="427"  filterUnits="userSpaceOnUse"\n' +
        '                color-interpolation-filters="sRGB">\n' +
        '            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n' +
        '            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"\n' +
        '                           result="hardAlpha"/>\n' +
        '            <feOffset dy="2"/>\n' +
        '            <feGaussianBlur stdDeviation="5"/>\n' +
        '            <feComposite in2="hardAlpha" operator="out"/>\n' +
        '            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>\n' +
        '            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_4735"/>\n' +
        '            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_4735" result="shape"/>\n' +
        '        </filter>\n' +
        '    </defs>\n' +
        '\n' +
        '    <svg width="144" height="144" viewBox="-72 -172 -144 -144" x="78" y="-83" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '        <circle id="Ellipse 1" cx="72" cy="72" r="67" fill="#3472BA" stroke="white" stroke-width="10"/>\n' +
        '\n' +
        '        <svg width="90" height="95" viewBox="0 0 90 95" x="27.5" y="27.5" fill="none"\n' +
        '             xmlns="http://www.w3.org/2000/svg">\n' +
        '            <g id="Group">\n' +
        '                <path id="Vector"\n' +
        '                      d="M88.0976 26.1875C87.0037 26.5412 85.8389 26.7386 84.6261 26.7386C78.4194 26.7386 73.3876 21.7191 73.3876 15.5277C73.3876 14.0808 73.6723 12.7016 74.1728 11.432L44.9995 0L15.8272 11.432C16.3277 12.7026 16.6124 14.0808 16.6124 15.5277C16.6124 21.7191 11.5806 26.7386 5.37388 26.7386C4.16212 26.7386 2.99631 26.5422 1.90242 26.1875C-2.32826 43.9763 -3.71485 79.3088 45.0005 95C93.7148 79.3088 92.3283 43.9763 88.0976 26.1875Z"\n' +
        '                      fill="url(#paint0_linear_22_4950)"/>\n' +
        '                <path id="Vector_2"\n' +
        '                      d="M20.5164 32.1925V13.8765L15.8262 11.4321C16.3267 12.7026 16.6114 14.0808 16.6114 15.5277C16.6114 21.7191 11.5795 26.7386 5.37283 26.7386C4.16106 26.7386 2.99525 26.5422 1.90137 26.1875L5.03017 30.7206L20.5164 32.1925Z"\n' +
        '                      fill="url(#paint1_linear_22_4950)"/>\n' +
        '                <path id="Vector_3"\n' +
        '                      d="M69.4824 13.8765V36.0122H78.2155L84.9676 30.7206L88.0965 26.1875C87.0026 26.5412 85.8378 26.7386 84.625 26.7386C78.4183 26.7386 73.3864 21.7191 73.3864 15.5277C73.3864 14.0808 73.6712 12.7016 74.1716 11.4321L69.4824 13.8765Z"\n' +
        '                      fill="url(#paint2_linear_22_4950)"/>\n' +
        '                <path id="Vector_4"\n' +
        '                      d="M44.9995 90.8027V95C93.7149 79.3088 92.3273 43.9763 88.0976 26.1875L84.9688 30.7206L44.9995 90.8027Z"\n' +
        '                      fill="url(#paint3_linear_22_4950)"/>\n' +
        '                <path id="Vector_5"\n' +
        '                      d="M44.9996 90.8027C4.09033 77.0866 1.75372 48.7058 5.03138 30.7206C5.14526 30.7236 5.25914 30.7246 5.37303 30.7246C13.7735 30.7246 20.6075 23.9075 20.6075 15.5277C20.6075 14.9737 20.5775 14.4236 20.5166 13.8765L44.9996 4.28304L69.4827 13.8765C69.4217 14.4236 69.3918 14.9747 69.3918 15.5277C69.3918 23.9075 76.2258 30.7246 84.6263 30.7246C84.7401 30.7246 84.855 30.7236 84.9679 30.7206C88.2456 48.7058 85.9089 77.0866 44.9996 90.8027Z"\n' +
        '                      fill="url(#paint4_linear_22_4950)"/>\n' +
        '                <path id="Vector_6" opacity="0.9"\n' +
        '                      d="M84.9678 30.7206C84.9678 30.7206 85.0237 31.0276 85.1276 31.6036C85.2405 32.1776 85.3723 33.0266 85.5362 34.1078C85.685 35.191 85.8429 36.5084 85.9657 38.0281C86.0646 39.5468 86.1735 41.2668 86.1126 43.1442C86.0676 45.0197 85.9527 47.0546 85.6431 49.1861C85.3374 51.3147 84.9178 53.5529 84.2505 55.809C83.5912 58.0651 82.739 60.3471 81.6871 62.5833C80.6212 64.8135 79.3285 66.9749 77.89 69.0338C76.4404 71.0896 74.7572 72.963 73.0389 74.7368C72.1408 75.5859 71.2827 76.4628 70.3456 77.2311C69.8851 77.6237 69.4356 78.0243 68.9731 78.402C68.5005 78.7667 68.032 79.1295 67.5665 79.4902C65.7024 80.9242 63.7943 82.1649 61.9552 83.2859C60.1001 84.3811 58.3129 85.3587 56.6196 86.1748C54.9474 87.0328 53.345 87.6746 51.9454 88.2785C50.5199 88.8226 49.2901 89.3318 48.2552 89.6896C46.1833 90.4001 45.0005 90.8057 45.0005 90.8057C45.0005 90.8057 46.1733 90.3712 48.2262 89.6108C49.2512 89.2282 50.4669 88.6901 51.8755 88.1131C52.5768 87.8171 53.303 87.4554 54.0792 87.0996C54.8554 86.7439 55.6736 86.3751 56.4998 85.9337C58.1801 85.1056 59.9523 84.117 61.7894 83.0119C63.6095 81.8799 65.4966 80.6302 67.3367 79.1903C67.7953 78.8295 68.2588 78.4648 68.7253 78.0991C69.1728 77.7094 69.6234 77.3188 70.0779 76.9252C71.002 76.1559 71.8451 75.2779 72.7282 74.4289C74.4165 72.6581 76.0658 70.7866 77.4854 68.7448C78.9249 66.7208 80.2216 64.5933 81.2955 62.394C82.3554 60.1887 83.2195 57.9345 83.8919 55.7033C84.5722 53.4721 85.0077 51.2529 85.3284 49.1413C85.654 47.0267 85.7859 45.0037 85.8469 43.1383C85.9118 41.2718 85.8489 39.5578 85.7889 38.0411C85.703 36.5244 85.5781 35.204 85.4563 34.1198C85.3184 33.0375 85.2075 32.1865 85.1086 31.6085C85.0167 31.0296 84.9678 30.7206 84.9678 30.7206Z"\n' +
        '                      fill="white"/>\n' +
        '                <path id="Vector_7" d="M44.9995 0V4.28303L69.4826 13.8765L74.1728 11.432L44.9995 0Z"\n' +
        '                      fill="url(#paint5_linear_22_4950)"/>\n' +
        '                <g id="Group_2">\n' +
        '                    <path id="Vector_8"\n' +
        '                          d="M22.7304 65.9714L17.7305 34.907L35.4194 43.2578L45.0007 26.7037L54.5819 43.2578L72.2699 34.908L67.2939 66.0143L22.7304 65.9714Z"\n' +
        '                          fill="#893B0C"/>\n' +
        '                    <path id="Vector_9"\n' +
        '                          d="M71.5986 35.8009L54.3702 43.9335L45.0007 27.744L35.6303 43.9335L18.4028 35.8009L23.176 65.4513L66.8494 65.4941L71.5986 35.8009Z"\n' +
        '                          fill="url(#paint6_linear_22_4950)"/>\n' +
        '                    <path id="Vector_10"\n' +
        '                          d="M26.3036 61.7871L23.1338 42.0939L37.1165 48.6938L44.9965 35.0784L52.8755 48.6938L66.8662 42.0879L63.7104 61.8249L26.3036 61.7871Z"\n' +
        '                          fill="url(#paint7_linear_22_4950)"/>\n' +
        '                    <path id="Vector_11"\n' +
        '                          d="M66.8493 65.4941L63.7105 61.8249L26.3036 61.7871L23.1758 65.4513L66.8493 65.4941Z"\n' +
        '                          fill="url(#paint8_linear_22_4950)"/>\n' +
        '                    <path id="Vector_12"\n' +
        '                          d="M35.6299 43.9335L37.1164 48.6938L44.9963 35.0784L45.0003 27.744L35.6299 43.9335Z"\n' +
        '                          fill="#E8F983"/>\n' +
        '                    <path id="Vector_13"\n' +
        '                          d="M45.0006 27.744L44.9966 35.0784L52.8756 48.6938L54.37 43.9335L45.0006 27.744Z"\n' +
        '                          fill="url(#paint9_linear_22_4950)"/>\n' +
        '                    <path id="Vector_14"\n' +
        '                          d="M71.5989 35.8009L66.8667 42.0879L63.7109 61.8249L66.8497 65.4941L71.5989 35.8009Z"\n' +
        '                          fill="url(#paint10_linear_22_4950)"/>\n' +
        '                    <g id="Group_3" opacity="0.9">\n' +
        '                        <path id="Vector_15"\n' +
        '                              d="M66.8667 42.0879C66.8667 42.0879 66.7479 43.3336 66.5121 45.1941C66.3852 46.1228 66.2574 47.208 66.0815 48.367C65.9077 49.5249 65.7209 50.7596 65.5351 51.9963C65.3263 53.227 65.1185 54.4597 64.9227 55.6146C64.7299 56.7696 64.5101 57.8409 64.3423 58.7636C63.9867 60.6042 63.71 61.8249 63.71 61.8249C63.71 61.8249 63.8278 60.5783 64.0646 58.7188C64.1925 57.79 64.3173 56.7048 64.4952 55.5459C64.67 54.3879 64.8558 53.1532 65.0416 51.9166C65.2504 50.6849 65.4582 49.4532 65.654 48.2982C65.8478 47.1432 66.0666 46.072 66.2344 45.1492C66.591 43.3097 66.8667 42.0879 66.8667 42.0879Z"\n' +
        '                              fill="white"/>\n' +
        '                    </g>\n' +
        '                    <path id="Vector_16"\n' +
        '                          d="M18.4028 35.8009L23.134 42.0939L37.1168 48.6938L35.6303 43.9335L18.4028 35.8009Z"\n' +
        '                          fill="url(#paint11_linear_22_4950)"/>\n' +
        '                    <path id="Vector_17"\n' +
        '                          d="M68.4316 52.6729C67.3736 58.375 65.105 62.7447 63.3677 62.4268C61.6275 62.105 61.0801 57.2151 62.146 51.506C63.2089 45.797 65.4746 41.4372 67.2118 41.7611C68.949 42.079 69.4945 46.9679 68.4316 52.6729Z"\n' +
        '                          fill="url(#paint12_radial_22_4950)"/>\n' +
        '                </g>\n' +
        '                <path id="Vector_18" opacity="0.4"\n' +
        '                      d="M0.150391 37.5827C0.440095 33.3435 1.1224 29.467 1.9026 26.1875C2.99649 26.5412 4.1613 26.7386 5.37406 26.7386C7.42497 26.7386 9.34202 26.1815 10.9963 25.2238L69.0821 83.1674C64.9403 86.2177 60.0313 89.0398 54.2412 91.5391L0.150391 37.5827ZM44.9997 0L25.3986 7.68116L84.1178 66.2555C88.9229 57.3715 90.2266 48.0859 89.9678 39.9235L53.1454 3.19184L44.9997 0Z"\n' +
        '                      fill="url(#paint13_linear_22_4950)"/>\n' +
        '            </g>\n' +
        '            <defs>\n' +
        '                <linearGradient id="paint0_linear_22_4950" x1="-13.3641" y1="-43.5714" x2="79.2238" y2="95.1547"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint1_linear_22_4950" x1="25.6149" y1="11.9719" x2="6.77286" y2="34.6045"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint2_linear_22_4950" x1="68.0921" y1="17.1899" x2="80.6028" y2="33.5377"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint3_linear_22_4950" x1="87.3878" y1="-16.4406" x2="62.6958" y2="90.8777"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint4_linear_22_4950" x1="-30.7725" y1="-20.2499" x2="161.621" y2="148.303"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint5_linear_22_4950" x1="3.38363" y1="-11.8429" x2="92.9932" y2="19.5604"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint6_linear_22_4950" x1="15.4417" y1="43.106" x2="88.6043" y2="56.8736"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint7_linear_22_4950" x1="10.0045" y1="24.4806" x2="83.1487" y2="79.6538"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint8_linear_22_4950" x1="-31.8131" y1="-27.9914" x2="37.5347" y2="56.7932"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint9_linear_22_4950" x1="47.4989" y1="34.3283" x2="62.4134" y2="69.8564"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint10_linear_22_4950" x1="49.0301" y1="42.088" x2="84.4667" y2="57.1823"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <linearGradient id="paint11_linear_22_4950" x1="9.6065" y1="32.251" x2="36.2747" y2="46.8368"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="#AF6517"/>\n' +
        '                    <stop offset="0.257" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="0.48" stop-color="#E9FF88"/>\n' +
        '                    <stop offset="0.6391" stop-color="#E0A03B"/>\n' +
        '                    <stop offset="1" stop-color="#88390B"/>\n' +
        '                </linearGradient>\n' +
        '                <radialGradient id="paint12_radial_22_4950" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"\n' +
        '                                gradientTransform="translate(65.2856 52.2428) rotate(10.5073) scale(2.80414 9.66995)">\n' +
        '                    <stop stop-color="white"/>\n' +
        '                    <stop offset="1" stop-color="white" stop-opacity="0"/>\n' +
        '                </radialGradient>\n' +
        '                <linearGradient id="paint13_linear_22_4950" x1="-6.01483" y1="45.3551" x2="94.2576" y2="46.1062"\n' +
        '                                gradientUnits="userSpaceOnUse">\n' +
        '                    <stop stop-color="white"/>\n' +
        '                    <stop offset="1" stop-color="#FAF7F5" stop-opacity="0"/>\n' +
        '                </linearGradient>\n' +
        '            </defs>\n' +
        '        </svg>\n' +
        '    </svg>\n' +
        '<foreignObject x="10" y="106" width="280" height="48">\n' +
        '    <p xmlns="http://www.w3.org/1999/xhtml" style="border: none;outline: none;font-family:Roboto;font-weight: 600;\n' +
        '   font-size: 48px;line-height: 1em;padding:0;margin:0;background-color: white;color: #3676BC;text-align:center">You WIN!</p></foreignObject>\n' +
        '   <foreignObject x="10" y="156" width="280" height="24">\n' +
        '   <p xmlns="http://www.w3.org/1999/xhtml" style="border: none;outline: none;font-family:Roboto;font-weight: 400;\n' +
        '   font-size: 18px;line-height: 24px;padding:0;margin:0;background-color: white;color: #3676BC;text-align:center">Congratulations!</p></foreignObject>\n' +
        '</svg>'

    parentEl.appendChild(containerElement);
}