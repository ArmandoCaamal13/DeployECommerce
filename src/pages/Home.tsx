import '../assets/css/Home.css';
import Footer from '../components/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Home = () => {

  return (
    <div className='col-lg-12'>
      <header>
        <div className="banner">
          <img src="https://gdurl.com/mLU0" alt="" />
          <div className="banner-text">
            <h1>Tech eCommerce</h1>
            <p>Tecnologia de alto rendimiento</p>
          </div>
        </div>
      </header>
      <main>
        <section className='section_categorias'>
          <div className='categoria'>
            <h2>Categorias</h2>
            <h3>Conoce nuestros productos</h3>
          </div>
          <div className='bloques_categorias'>
            <a href=""><img src='https://doc-0k-bk-docs.googleusercontent.com/docs/securesc/t9susf15r7fg37k283ikgco6v8vlrrfh/9k8foq39eipeo20a6eldamr4gf6f70fq/1690169250000/04561192088929879994/04561192088929879994/1H8qsXNvcUXI3GjMb7Q68WBVkO_v8h2Ra?ax=AGtFMPVr9SkYz81tTZXAVF24cxPV7uHawlBT-MiVLKwOHPzaUUhYz7Lk29EbC329dMslLvuH16gYE6Ux5RGhf0XVvqyiCQi_vyFhq1d6v03BVYSIaQ-LYYtsKm-UCR_b9QnX8YUI8Gk7flwLJEL0SAKrGer3FhJr573f4euVrsEF665kZXZ-Z_yYDOMWRoGeWinBSXC_rNHzoo1gRshaXffXPk1rSHqAfx0NG-E_tX8TFj_Tx0iRcU5CycWABp1QuEntp1s9DdhS-ywKaHZ1hUPE5Ym7xIQYB_6eGSyoj7tna9Itoi0NM3rrECXUL-BF6z1c801ax13GWcmSsEZlypvmBQRA6QCmhs0pIgKCvGVuSsy3m9e_Z2dWMdM0YXTZMXYRvKJta9GPyjGqRCOI9aVi4df_pOlMO3UppLnSrzdzg3bcC1Jb3ryH7ki_pxuuzaiTOPvmgXmgaGEnmuG9giOPZSK2H_0N2gfgri74tI7d-ZR8X8OYW9zzehnQZ6c4HBiVK_2670weFLZ950dz0Dme_ZrzR36b0Yiq9FiIL8MuETR_Uzxd0n1YjvAzgySN9juHbQqMdIWyGWzV63aUDzFeNOVUcE-qSkX2bENCJTM3i1bT0moY29F2eluB041-E10L83fjZvZYyuFEP-Whyy6ayK5429odG1H3oDCzsy972PylZzs2nkfxi_rwilxXJUNZroQWJRkFBVrCSPr77uxEA2RJ_v1Vs8zSOSQkAxZgOECwWzwyqtz03e6T2TpFqob1ftXcXM19P5SQZuiUirsD_cZkmdjeDn4XOLStVoqaKDEwjjetilay6naPvo_OJYh8iLCE87znXG2tBvJ_6LEiUxnhjY-AQMpDvJ5stHuoZ3T1QTgg-57Xf1WVTk8ic4ATLg&uuid=e06a3af2-bb52-4bb0-8276-808dffa39116&authuser=0' alt='computo' /></a>
            <a href=""><img src='https://doc-0g-bk-docs.googleusercontent.com/docs/securesc/t9susf15r7fg37k283ikgco6v8vlrrfh/9gfn3ndje4rd687namq3jsjfc7o7ohu2/1690169325000/04561192088929879994/04561192088929879994/1aN_Hz1w79Xat98qc40rzZjLso0RUr_3K?ax=AGtFMPVvSObjNJS6I7c9gktGVFjglxnwn2ZpGlBab9DhVzFs3Qbb-0W1zKZ9FKh-cy5iKTOgAcmGdshKaDS37li_mdruYHWg1XxJZ4hq2zwKEosiP_5w000R1843eEaK18o9fbA-7wl2YD2zzXqLkVsmX924eaIlPZWGiekjrRHAh5O5CiIKVWGIg9uKiFcaW1OBoFSx_oZf7R-BvPHUCpVAWH49BZ6B4D6lGsqSkTE6DljiqxKhHkvYto48AEu3GO9qVBgFIfuG703aueOIHtorjLKockpiIUkmNgDxpTukvpXoOIX-QlwKsEhlMCgbcsUbCPNS5NhVg4wP1Y4sN7f6GEbP_B5SwkcOtb_t9Jjzk6hFvWWCzdofzKa6gWsucJriwvHqqy48rc0pO4hsJ-onw7e9YxNSwhk9YTAqqibAEUaT_Ae1ERbvRUXtby243VSmoasN3SXwGr5d7Iuc5ithMXf35EY6vMZAbBS6MrlWtBIt5Y9SKkcFjP7eE-BfVBKSvZ9YQw3IvQvWhgyo88IGECfLuzSITa4lJ02uDYF2i6tWD3oyGuTgZVnHpGX1TxMAuTSMjKVo8TeKEvlnWfFyiqmgVr1lv5MdLpnCnf01f8UxIdk-uZIGIPPzUuYahU4k16GmLjMwqYlEFrny01OFOA97W9RFDvDrv95i5y0px4aAnq9WLbEYJdYpzrjQmDT-zFuNygOLyRy5yNd8-6LWlu0RIlyffDgpEj-lrhjgxz61tD5ssL4Hs3_rDa8YfphNoNPv099bu2N2FmSsN7eu3BHeVm0rCaQmjsl_-kohBmS2mJPjelaV8Xmw1tDxKfi6FJhBIPLEA_0V58YcVO2imAcvzoFXzoh7ZEwkcKmw4MxTXZCVhvLxKzCFi0Cv0CDslw&uuid=9efca38e-b45d-443b-81b0-880cb45b8c02&authuser=0' alt='computo' /></a>
            <a href=""><img src='https://doc-00-bk-docs.googleusercontent.com/docs/securesc/t9susf15r7fg37k283ikgco6v8vlrrfh/kml2pnqq9dflk2fu3g61d7jb9mt9lhba/1690169250000/04561192088929879994/04561192088929879994/12mz53hzMLWX7N7jdKS1U_ZogO6RhbvY0?ax=AGtFMPWOYb0kQ2at2LeLfmHoAsQnz1Ew1mSXF3UdfyLl0-aR6RXiUoXzbbIS2iOkOJ5NS05W4-BIN4VDCPQlKBd2q1Fm0NqJiPTWjvaYO8XWKh9FoxehGsdLuEVbo4SQoRWTHs1ZV_SgYY1RZAlNdyh3Orb-NitGd4laqB68w-bf_nmKwaIjVDxKsEHrvU7SyXzfNMQi-0lEaRhxN2vDY9snuybSzDJxFc8o4uK7UlhU08gl0yahjiHhCHjMK16boF_iryNfjhAyBgV5jnpoIgac1ImO4pNKoE-pKntVaz0AXjIXSHEVpltXjUWUY_mNyn9yke2VlhppMLRV1JTGV9QjIANxgkRm_EtnDLKPFH-sNhsf4YGoLZAYQ7MV00Ci5OoFMVAiAvTe7adziOHtOIjLrUSTGowdkJtRWZuLOUpFxVJY-jveQ4lY77UQOR_TkY3dec6GIKWISougUArgraDfAqiyOdc4x7a_D7vU3zaIvCZXNUG8IPvxYSNE6vF1On4HhuXsy86UgY-f54MwPzMxdKC6cQ6L6Bo_o9P14axGedWxltND9m11yznnFZjIF7fwkKMWEhTqx1ckc_ghK474iMQajUzsvS-GPyxxoJlVY1YnRXUIKtkbDBu5NRKbTxU0ElmvvGB2K-4gGB_yFbw0uq6VwdaBnAKNAk639Cynx80FpXH4I8efnynwL8yRqBA4zyUedHgyJMd50f0d7RtJO1tXjHt28KksMwQVzS2oyZo_3NBqufXyJwH8ieX7O4W0s-LOyZZfBX1JXLmt6Uo_O1IDQc2HEbomXOGdCkf9Noa1M11VJPCr7v5m2DT3kKrNh0NoqW4Q2CLaUiVYr3g_Cf-Yry-6Sg4OcIE6pwj71nQpy4gB-I4oRe4XBHCR5XME3A&uuid=93547b8c-7138-4cca-9831-256d34c3f99b&authuser=0' alt='computo' /></a>
            <a href=""><img src='https://doc-0c-bk-docs.googleusercontent.com/docs/securesc/t9susf15r7fg37k283ikgco6v8vlrrfh/4rtrno6en3ds1il3m6s9po544s5d66m5/1690169325000/04561192088929879994/04561192088929879994/1YISTQhaOfL_7TXX7_9hlVKfn_PA60uqO?ax=AGtFMPX88nfGkXay1GWeKJ_UAe-2R_hLErJKV63TqFD1cngulIBdSrAkvL2eTT0R6gkC04tWx93m5tQbRLqu39Mhxsil91kiXrnCxY4H4rLRlbhckJgEMZ2x5rhDqGF4iG998jtFe0BQNkPjWAvv3PIAP6bu_cGT_TE-zQOk2xrb7QuUjoKTVbjxbqEN7fp3uywhL5MLs23uquL7uCgTXMpgcBexfBRa7dwOV3pw85Ksft2oKubAoYPALiFjzaR5cjRhfYVI9Taz0OljnbXfueObDF-37xcJ1Y94Qe5FL3DfX7A4ByrcOXRa2WPvhBo23VimEJurRzk4J_Qb_8OCRgXeugu0aj-wwLD4xoxw9jf0XTLfr3WmZoUauf16QbaRJFM-sO7OfPkh8B3iAzrbVxfkRxiu8LLZHj87vkeivh92E112LFj3yacK_cbdhmXwDGLFSdB6wiVF6tGrdyXUMMzIBIdjKXm5GXGcCig4nG5e3dRhv8Umi7_GMQ-F13FsjCh9F8QJPkgxAPSknvFjNZ5O1bYL3qjrmJVniTINVwIUL5zolvMEbbNISlyOcdlsGQm6k86BUVjbyMKvI3zPjXi8UFYt3RE1byf9Mn5YSjvrkIl9hnYdh8F7Iij7z4EmonWk2KGDDLJay3ovJhLULjdzvf_NwCgC6gnUjD69lllJ2pXZrYiJKwjmWfe3JgfUAT3NQDNJ5mhYIFqYwvSAczIBM1idI5E7qMJfOUy8psUSiiYg48Stok9bPaLgkd8z67rw2u-K3ZSmaDe-2zqHjDMzoUnOQVqyF0RpZUKT0Y-XeuzAfm9A2iddxv__EQqbEIIqYRtE-RA9Wtis7_a_hSwJmzl1-7sK2ypDYANyrOPQn6DaR6HqPpYsTC3gGzBF0Djz5g&uuid=d4a72aec-b386-49a6-aab9-89339f0caca7&authuser=0' alt='computo' /></a>
            <a href=""><img src='https://doc-0o-bk-docs.googleusercontent.com/docs/securesc/t9susf15r7fg37k283ikgco6v8vlrrfh/invosopjs1qf61i2gunj8i13vnajc1f1/1690169400000/04561192088929879994/04561192088929879994/1fN9A6jXVRJOpUDpeY7zjyrh8tn9KdAFv?ax=AGtFMPWgUsA4FxPuxQHq5grsb_sc8EZni2vr5fxuS0FwopDVszT6sbJHzyeoWZ9hME6OxLkz64L_C2gaacOIywsluUYORmFYzTXJG-wsJi5oy2oqm--QAneiT_M7skTxNdKs8dGGplv-fI0qGGYeV_VQJCK0j6pvLTWGcZKsnVCZcjWNZnkYpAAHmOAIgS1aNVkmDY4lhcVAg8xVdat6T8ij1GyTRX_7V2gfOPOmcjUYYg9pkCim2zPJs-6c-xZhlVnMIoMOp3n1tlL4lXZC0NKiq_SCSOD0fSD7g1XeowQXkD-nJ0-JZxFwJNRSRP29n9757DEvz_z63aV9Y0cDFhW_RZuSoIpIGW8TBg9MKjR49wMXF7wgOIaQoVJcb1JSX1DEZPlezMgj11UXJnXSnZUnECZP-bRKKt3n72zJx_iGztq4-m_hJlVIG75FzbC1_LiNZ4YNnS0XceF_aLRjMHbkcm9l_eKNVyXeRtvUk2wVOLgrKrTkDuQ83j0fYejtPZYtZsHdGLGsAlG0b-F5WwhRzPsyB2rQeJFJtLnFZYvyXzcG608qGMj98DpsodykiX2VXcROpB85IFfbrxiu6V7DKWzW61NACQL6koB5yocaoIVxaLxhomA8OOF4qYYzDel1AWANzcSxBYlQ66DO49wOyhfF2RKuJ52jyK-5vPbxxVi3SL41hidxfPBAGAFaI9ZOMJ0YT0jBH8_LbZqSFP47mxV2Moxlo3OgZ2Hqa4w6Khe81QMY8fvGBo6lU8iHMblt6ZrJthnWM-L3rRqtZ6cMXyr3RqtmQX57JpzYddZ3Xs3gX0QleQi0sg9M2xWsZMxTrFyQrh4E-PLzHLHpFgYqmagHvXhmvXCe3VfnFCxu7TmDMkI5-oSS0Dmq_BiI_f28Nw&uuid=8940317e-3ab1-4ce4-a8e8-ebdfbec368cd&authuser=0' alt='computo' /></a>
            <a href=""><img src='https://doc-10-bk-docs.googleusercontent.com/docs/securesc/t9susf15r7fg37k283ikgco6v8vlrrfh/g3j5gccc6q0gke8t35ccqgp69p8dv55r/1690169175000/04561192088929879994/04561192088929879994/1OeoFjNxdNt5aYoMMv4fVLJLRQG_RYsU3?ax=AGtFMPUzbYSs0lS4iwAzzkZbTenkiMRwUcUcyk2LVtlL5O24jR1jPpsE7EmDNWFZP8Y1Sy23xuqXJBSNpO2wr911Yy9W2X33H9bzCQjjcYmO-jyL78qY99uZlKxlPnCaOf8vQlfPRviZ4e_wq_krf3epvJrntwJiae1L4rOSvhZ0u6Du_EuDm7kpHM5HC5Lp3tSxSS8Ok2Rb1qcwVxqabRRL2oknukkNmw9s24yOhpC2fljFlZEVd-HMStNYQSd2NsU6dEyNXfY5lckGadrrR3Ge1k7HT3sqgtnq9wyrMkbpacHyjSZa6G6OrXxwimo8Vt8w3tycDzs0em7auWrDAmTumnYSy_OpJAoczc9RbAXjBwX6zwqxpgmv0vA-1Md6K1WtiQGwroE9lo7eMjJm_DfodYsgD0ooGg1mJC-85pnPFvxI1n85pGAXfpAMZVv3zKYUnNHzkxHyepUCheUmrfDTkKDb-1b4jVz89-KNBuriVI_m-KbHeE76SWRqv-_kjKVnxbEfMobJuiqtNhrsbjg82coOVN4j6KbCogHsJ1ik_cC7WXyU85iod8jmsHKC6ylbarRl-rukO4o2tC7vBnXwm3uVBvEK2ytN76cMLn8bzmCJkY6zm5NIHzBepgx2vh0aOCCfv9eQBrhijSVEAwdSsLStDB3gMOLefT8N65WcaMAmS4kBuLBMAjA1dmzSWVdyRbhCvmfHPjowUnHsNWCjk-_joibiqSnWXszw4zjSJO55QBpTUi21q48ziLo0bE67A7AQmguSECjtIGPxb4CyOjsFoVBI6otlIasqO3rBTpFxER3tifusZEEV9EjfVxTTOLhn9pnK_K-WxBsERhu8ZHbd7eZpgrERxfSsqDRKXODz-v_HK6zgxANmRFJ27vXC3Q&uuid=85d0c027-c77f-4217-ba4d-3a81a0c795a1&authuser=0' alt='computo' /></a>
          </div>
        </section>
        <section className='section_productos'>
          <div className='productos-titulo'>
            <h2>Nuevo productos</h2>
            <h3>Lo mas nuevo</h3>
          </div>
          <div className="d-flex gap-5 align-items-center justify-content-center flex-wrap mt-5">
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="https://m.media-amazon.com/images/I/81if4I5R1yL._AC_SX522_.jpg"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Laptop
                </Typography>
                <Typography variant="body2" color="text.secondary">
                HP EliteBook 840 G5 14 FHD Core i5-8350U 1.7GHz, 16GB RAM, 512GB M.2-NVMe, Windows 10 Pro 64Bit, CAM 
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                sx={{ height: 200 }}
                image="https://cdn.gameplanet.com/wp-content/uploads/2023/01/05133916/6950376772251-redragon-teclado-k630-dragonborn-negro-1.jpg"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Teclado
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Logitech K360 - Teclado (Estándar, Inalámbrico, RF inalámbrico, QWERTY, Negro)
                </Typography>
              </CardContent>

            </Card>
            <Card sx={{ maxWidth: 400}}>
              <CardMedia
                sx={{ height: 235 }}
                image="https://m.media-amazon.com/images/I/71A-tk9Bh-L._AC_SX522_.jpg"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Audifonos Gamer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ocelot tipo diadema iluminacion rgb
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 400}}>
              <CardMedia
                sx={{ height: 235 }}
                image="https://m.media-amazon.com/images/I/71A-tk9Bh-L._AC_SX522_.jpg"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Audifonos Gamer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ocelot tipo diadema iluminacion rgb
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 400}}>
              <CardMedia
                sx={{ height: 235 }}
                image="https://m.media-amazon.com/images/I/71A-tk9Bh-L._AC_SX522_.jpg"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Audifonos Gamer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ocelot tipo diadema iluminacion rgb
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 400}}>
              <CardMedia
                sx={{ height: 235 }}
                image="https://m.media-amazon.com/images/I/71A-tk9Bh-L._AC_SX522_.jpg"

              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Audifonos Gamer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Ocelot tipo diadema iluminacion rgb
                </Typography>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />

    </div>
  )
}

export default Home

