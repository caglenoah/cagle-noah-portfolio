import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10
      justify-evenly mx-auto items-center"
    >
      <h3 className="md:absolute top-24 uppercase tracking-[20px] text-gray-500 text 2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://lh3.googleusercontent.com/pw/AP1GczP1uABDa-AiJI_rVGWYA5ZrZv65G5ZWbPzrcC2amOYAYzDg3OCPUOIVhCTqJ51IaXGNJbfS-1unUsZiV-UX7t0ys5Xi0jzlU6GmCtkpOcja_5OEBnRk8Ck7rp7AWkd2NPZ_qe-BB4VK_JIvnfkg_h5-ObNTWw9JJvdYXV52M1thjo_EJc-IWWI_cWtwT6RXPqGzoucHoqeoFAlfUSbs713kA2VjbeGttrhEtLKlkuj1dNL_svHZcTo8HcltF_zcFwleWG6fdzGBxmpegm89LcidwNlKu_Tbngv-zPEpkSmoCN69nOWdOwsSZZiv_IdOA3dSH_fs9iH5ZGCd1-PTm21u-INeM4ceqSZ5ZjsiFgkYSTsl92aqC5UozlmTMEFON-KME4Z5r0JVXwUuoPlmiWeSbRfSDlmwmuoVIgGyHBHhTWz5Y8_iZSgX1x5vU3cH592drM4Qt5HT9x90pZ_fWTPHn65cdGPELGFcP1XSQ3XF-kD2PtCxivzW5AX0dX0vxG3WnRiU_002Z973FXSk7-8zYCoDwOIpILnIFStpc1PN9xHCjt01YpWwqq0OIcrV6ISW6kHnkIpCgmlflNJBJlTdbv-49bLAHcP-xjPQ3QoBGnlzLk-jAEmHbE7hoMNRuq1r9YccSux72y7yEr-BWpZUF1I5Iq-K6olz3QCHfx35xcCm5tPD3B90RIwFGl29W9FhIge9fiK_SGYcTcQhpCqjvSlC4D10A8g-WGQJo1ZuO-qAaI-xBzB9bs5MbxaTYr88v_Da6kvA_SGtkJ3DpwCdV33M5DJg22rXjsVOFobJDQyhF5bUMSAV7xMqDR9vAgUQAJE7-JG3InlYxpaQwTobOjYFZ3xUPkvABwdwu7KHn3xoJWz-qo1515TymdEyg9NnDm-rUm3JskF94uiKZXA=w1598-h1010-s-no-gm?authuser=0"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10 pt-4 md:pt-4">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[yellow]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          reprehenderit ea molestias eaque veniam repellat iure deserunt qui
          quibusdam, dolor assumenda, eos non nam atque eius totam enim
          repellendus velit. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Nam recusandae ratione illum tenetur ipsam pariatur possimus
        </p>
      </div>
    </div>
  );
}
