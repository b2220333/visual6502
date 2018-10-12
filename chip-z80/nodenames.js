var nodenames ={
// Pads
vss: 1,
vcc: 2,
clk: 3,
ab0: 5,
ab1: 6,
ab2: 7,
ab3: 8,
ab4: 9,
ab5: 10,
ab6: 11,
ab7: 12,
ab8: 13,
ab9: 14,
ab10: 15,
ab11: 16,
ab12: 17,
ab13: 18,
ab14: 19,
ab15: 20,
_reset: 21,
_wait: 22,
wait: 22,
_int: 23,
int: 23,
_irq: 23,
irq: 23,
_nmi: 24,
nmi: 24,
_busrq: 25,
busrq: 25,
_m1: 26,
_rd: 27,
_wr: 28,
_mreq: 29,
_iorq: 30,
_rfsh: 31,
db0: 32,
db1: 33,
db2: 34,
db3: 35,
db4: 36,
db5: 37,
db6: 38,
db7: 39,
_halt: 40,
_busak: 41,
// T-States
t1: 115,
t2: 137,
t3: 144,
t4: 166,
t5: 134,
t6: 168,
// Machine cycles
m1: 155,
m2: 173,
m3: 163,
m4: 159,
m5: 209,
m6: 210,
// EXX latches
ex_af: 631,
ex_bcdehl: 1770,
ex_dehl0: 625,
ex_dehl1: 629,
ex_dehl_combined: 626,
// Registers
reg_a0: 2245,
reg_a1: 2319,
reg_a2: 2357,
reg_a3: 2442,
reg_a4: 2463,
reg_a5: 2552,
reg_a6: 2586,
reg_a7: 2656,
reg_f0: 1827,
reg_f1: 1903,
reg_f2: 1928,
reg_f3: 2009,
reg_f4: 2032,
reg_f5: 2107,
reg_f6: 2132,
reg_f7: 2209,
reg_b0: 2242,
reg_b1: 2316,
reg_b2: 2354,
reg_b3: 2439,
reg_b4: 2460,
reg_b5: 2549,
reg_b6: 2583,
reg_b7: 2653,
reg_c0: 1824,
reg_c1: 1900,
reg_c2: 1925,
reg_c3: 2006,
reg_c4: 2029,
reg_c5: 2104,
reg_c6: 2129,
reg_c7: 2206,
reg_d0: 2238,
reg_d1: 2312,
reg_d2: 2350,
reg_d3: 2435,
reg_d4: 2456,
reg_d5: 2545,
reg_d6: 2579,
reg_d7: 2649,
reg_e0: 1820,
reg_e1: 1896,
reg_e2: 1921,
reg_e3: 2002,
reg_e4: 2025,
reg_e5: 2100,
reg_e6: 2125,
reg_e7: 2202,
reg_h0: 2240,
reg_h1: 2314,
reg_h2: 2352,
reg_h3: 2437,
reg_h4: 2458,
reg_h5: 2547,
reg_h6: 2581,
reg_h7: 2651,
reg_l0: 1822,
reg_l1: 1898,
reg_l2: 1923,
reg_l3: 2004,
reg_l4: 2027,
reg_l5: 2102,
reg_l6: 2127,
reg_l7: 2204,
reg_w0: 2234,
reg_w1: 2308,
reg_w2: 2346,
reg_w3: 2431,
reg_w4: 2452,
reg_w5: 2541,
reg_w6: 2575,
reg_w7: 2645,
reg_z0: 1816,
reg_z1: 1892,
reg_z2: 1917,
reg_z3: 1998,
reg_z4: 2021,
reg_z5: 2096,
reg_z6: 2121,
reg_z7: 2198,
reg_pch0: 2232,
reg_pch1: 2306,
reg_pch2: 2344,
reg_pch3: 2429,
reg_pch4: 2450,
reg_pch5: 2539,
reg_pch6: 2573,
reg_pch7: 2643,
reg_pcl0: 1814,
reg_pcl1: 1890,
reg_pcl2: 1915,
reg_pcl3: 1996,
reg_pcl4: 2019,
reg_pcl5: 2094,
reg_pcl6: 2119,
reg_pcl7: 2196,
reg_sph0: 2235,
reg_sph1: 2309,
reg_sph2: 2347,
reg_sph3: 2432,
reg_sph4: 2453,
reg_sph5: 2542,
reg_sph6: 2576,
reg_sph7: 2646,
reg_spl0: 1817,
reg_spl1: 1893,
reg_spl2: 1918,
reg_spl3: 1999,
reg_spl4: 2022,
reg_spl5: 2097,
reg_spl6: 2122,
reg_spl7: 2199,
reg_ixh0: 2237,
reg_ixh1: 2311,
reg_ixh2: 2349,
reg_ixh3: 2434,
reg_ixh4: 2455,
reg_ixh5: 2544,
reg_ixh6: 2578,
reg_ixh7: 2648,
reg_ixl0: 1819,
reg_ixl1: 1895,
reg_ixl2: 1920,
reg_ixl3: 2001,
reg_ixl4: 2024,
reg_ixl5: 2099,
reg_ixl6: 2124,
reg_ixl7: 2201,
reg_iyh0: 2236,
reg_iyh1: 2310,
reg_iyh2: 2348,
reg_iyh3: 2433,
reg_iyh4: 2454,
reg_iyh5: 2543,
reg_iyh6: 2577,
reg_iyh7: 2647,
reg_iyl0: 1818,
reg_iyl1: 1894,
reg_iyl2: 1919,
reg_iyl3: 2000,
reg_iyl4: 2023,
reg_iyl5: 2098,
reg_iyl6: 2123,
reg_iyl7: 2200,
reg_i0: 2233,
reg_i1: 2307,
reg_i2: 2345,
reg_i3: 2430,
reg_i4: 2451,
reg_i5: 2540,
reg_i6: 2574,
reg_i7: 2644,
reg_r0: 1815,
reg_r1: 1891,
reg_r2: 1916,
reg_r3: 1997,
reg_r4: 2020,
reg_r5: 2095,
reg_r6: 2120,
reg_r7: 2197,
reg_aa0: 2244,
reg_aa1: 2318,
reg_aa2: 2356,
reg_aa3: 2441,
reg_aa4: 2462,
reg_aa5: 2551,
reg_aa6: 2585,
reg_aa7: 2655,
reg_ff0: 1826,
reg_ff1: 1902,
reg_ff2: 1927,
reg_ff3: 2008,
reg_ff4: 2031,
reg_ff5: 2106,
reg_ff6: 2131,
reg_ff7: 2208,
reg_bb0: 2243,
reg_bb1: 2317,
reg_bb2: 2355,
reg_bb3: 2440,
reg_bb4: 2461,
reg_bb5: 2550,
reg_bb6: 2584,
reg_bb7: 2654,
reg_cc0: 1825,
reg_cc1: 1901,
reg_cc2: 1926,
reg_cc3: 2007,
reg_cc4: 2030,
reg_cc5: 2105,
reg_cc6: 2130,
reg_cc7: 2207,
reg_dd0: 2239,
reg_dd1: 2313,
reg_dd2: 2351,
reg_dd3: 2436,
reg_dd4: 2457,
reg_dd5: 2546,
reg_dd6: 2580,
reg_dd7: 2650,
reg_ee0: 1821,
reg_ee1: 1897,
reg_ee2: 1922,
reg_ee3: 2003,
reg_ee4: 2026,
reg_ee5: 2101,
reg_ee6: 2126,
reg_ee7: 2203,
reg_hh0: 2241,
reg_hh1: 2315,
reg_hh2: 2353,
reg_hh3: 2438,
reg_hh4: 2459,
reg_hh5: 2548,
reg_hh6: 2582,
reg_hh7: 2652,
reg_ll0: 1823,
reg_ll1: 1899,
reg_ll2: 1924,
reg_ll3: 2005,
reg_ll4: 2028,
reg_ll5: 2103,
reg_ll6: 2128,
reg_ll7: 2205,
// Data buses and control
dp_dl: 82,
dl_dp: 165,
load_ir: 1354,
dlatch0: 123,
dlatch1: 195,
dlatch2: 414,
dlatch3: 930,
dlatch4: 1000,
dlatch5: 872,
dlatch6: 751,
dlatch7: 358,
dl_d: 87,
d_dl: 133,
dbus0: 138,
dbus1: 196,
dbus2: 412,
dbus3: 480,
dbus4: 485,
dbus5: 486,
dbus6: 380,
dbus7: 370,
_instr0: 1350,
_instr1: 1360,
_instr2: 1366,
_instr3: 1380,
_instr4: 1388,
_instr5: 1395,
_instr6: 1370,
_instr7: 1375,
instr0: 1348,
instr1: 1359,
instr2: 1365,
instr3: 1379,
instr4: 1387,
instr5: 1394,
instr6: 1369,
instr7: 1374,
d_u: 546,
ubus0: 545,
ubus1: 528,
ubus2: 526,
ubus3: 770,
ubus4: 779,
ubus5: 790,
ubus6: 716,
ubus7: 525,
u_v: 750,
vbus0: 755,
vbus1: 772,
vbus2: 783,
vbus3: 796,
vbus4: 803,
vbus5: 808,
vbus6: 836,
vbus7: 839,
rl_wr: 678,
rh_wr: 652,
r_u: 692,
r_v: 693,
regbit0: 702,
regbit1: 732,
regbit2: 738,
regbit3: 775,
regbit4: 776,
regbit5: 807,
regbit6: 809,
regbit7: 864,
regbit8: 870,
regbit9: 902,
regbit10: 906,
regbit11: 934,
regbit12: 935,
regbit13: 970,
regbit14: 973,
regbit15: 999,
r_p: 1785,
r_x1: 608,
pcbit0: 703,
pcbit1: 731,
pcbit2: 739,
pcbit3: 774,
pcbit4: 777,
pcbit5: 806,
pcbit6: 810,
pcbit7: 863,
pcbit8: 871,
pcbit9: 901,
pcbit10: 907,
pcbit11: 933,
pcbit12: 936,
pcbit13: 969,
pcbit14: 974,
pcbit15: 998,
// ALU
alubus0: 837,
alubus1: 889,
alubus2: 937,
alubus3: 983,
alubus4: 852,
alubus5: 903,
alubus6: 951,
alubus7: 995,
alua0: 850,
alua1: 899,
alua2: 947,
alua3: 993,
alua4: 868,
alua5: 920,
alua6: 968,
alua7: 1007,
alub0: 845,
alub1: 897,
alub2: 944,
alub3: 988,
alub4: 867,
alub5: 918,
alub6: 966,
alub7: 1005,
aluout0: 2211,
aluout1: 2338,
aluout2: 2504,
aluout3: 816,
alulat0: 865,
alulat1: 912,
alulat2: 960,
alulat3: 1002,
// PLA
pla0: 287,
pla1: 332,
pla2: 314,
pla3: 333,
pla4: 315,
pla5: 334,
pla6: 316,
pla7: 335,
pla8: 317,
pla9: 336,
pla10: 318,
pla11: 361,
pla12: 261,
pla13: 337,
pla14: 319,
pla15: 464,
pla16: 288,
pla17: 338,
pla18: 320,
pla19: 364,
pla20: 325,
pla21: 324,
pla22: 308,
pla23: 289,
pla24: 339,
pla25: 313,
pla26: 340,
pla27: 290,
pla28: 341,
pla29: 291,
pla30: 342,
pla31: 292,
pla32: 365,
pla33: 293,
pla34: 362,
pla35: 294,
pla36: 331,
pla37: 293,
pla38: 343,
pla39: 296,
pla40: 297,
pla41: 298,
pla42: 344,
pla43: 299,
pla44: 269,
pla45: 300,
pla46: 237,
pla47: 301,
pla48: 345,
pla49: 302,
pla50: 346,
pla51: 264,
pla52: 266,
pla53: 347,
pla54: 303,
pla55: 356,
pla56: 227,
pla57: 366,
pla58: 304,
pla59: 305,
pla60: 271,
pla61: 348,
pla62: 306,
pla63: 309,
pla64: 311,
pla65: 312,
pla66: 307,
pla67: 367,
pla68: 272,
pla69: 349,
pla70: 273,
pla71: 350,
pla72: 274,
pla73: 351,
pla74: 275,
pla75: 276,
pla76: 268,
pla77: 352,
pla78: 277,
pla79: 278,
pla80: 279,
pla81: 280,
pla82: 368,
pla83: 281,
pla84: 282,
pla85: 283,
pla86: 284,
pla87: 285,
pla88: 286,
pla89: 321,
pla90: 353,
pla91: 322,
pla92: 354,
pla93: 323,
pla94: 369,
pla95: 258,
pla96: 249,
pla97: 245,
pla98: 355,
}
