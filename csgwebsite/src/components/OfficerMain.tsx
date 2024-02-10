import OfficerCard from "./OfficerCard";

// All pictures used on the page are stored in this object
const PICLINKS = {
  BANNER: "./Photos/OfficersHeart.jpg",
  PRESIDENT: "./Photos/OfficerPics/Becky_Pres.jpg",
  VP_EXT: "./Photos/OfficerPics/Caro_VPExternal.jpg",
  VP_INT: "./Photos/OfficerPics/Chelsea_VPInternal.jpg",
  MARKETING_DIR: "./Photos/OfficerPics/Kaitlin_MarkDir.jpg",
  PROF_DEV_CHAIR1: "./Photos/OfficerPics/Daisy_ProfDevChair.jpg",
  PROF_DEV_CHAIR2: "./Photos/OfficerPics/Maria_ProfDevChair.jpg",
  MENT_CHAIR1: "./Photos/OfficerPics/Reem_MentorChair.jpg",
  MENT_CHAIR2: "./Photos/OfficerPics/Lisa_MentorChair.jpg",
  SECY: "./Photos/OfficerPics/Neha_Secy.jpg",
  WEBMASTER: "./Photos/OfficerPics/Sage_WebM_Alt.jpg",
};

// All officer information is stored in this object
const OFFICERS = {
  president: {
    name: "Rebecca Santos",
    discord: "https://discord.com/users/eckybae",
    linkedin: "https://www.linkedin.com/in/rebeccasantos106/",
    email: "rebeccamsantos7@gmail.com",
    pic: PICLINKS.PRESIDENT,
  },
  vp_ext: {
    name: "Carolyn Heron",
    discord: "https://discord.com/users/carisimo",
    linkedin: "https://www.linkedin.com/in/ana-c-heron/",
    email: "ana.heron02@gmail.com",
    pic: PICLINKS.VP_EXT,
  },
  vp_int: {
    name: "Chelsea Nguyen",
    discord: "https://discord.com/users/sheepsgardenn",
    linkedin: "https://www.linkedin.com/in/cngu/",
    email: "cngu02@gmail.com",
    pic: PICLINKS.VP_INT,
  },
  marketing_dir: {
    name: "Kaitlin Wood",
    discord: "https://discord.com/users/kaminji",
    linkedin: "https://www.linkedin.com/in/kaitlinwood03/",
    email: "wood.kaitlin3@gmail.com",
    pic: PICLINKS.MARKETING_DIR,
  },
  prof_dev_chair1: {
    name: "Daisy Gonzalez",
    discord: "https://discord.com/users/flowerspasms",
    linkedin: "https://www.linkedin.com/in/daigza09/",
    email: "daisy.gonzalez0214.dg@gmail.com",
    pic: PICLINKS.PROF_DEV_CHAIR1,
  },
  prof_dev_chair2: {
    name: "Maria Thomas",
    discord: "https://discord.com/users/straw6286",
    linkedin: "https://www.linkedin.com/in/maria-le-thomas/",
    email: "mlthomas4@uh.edu",
    pic: PICLINKS.PROF_DEV_CHAIR2,
  },
  ment_chair1: {
    name: "Reem Alkhalily",
    discord: "https://discord.com/users/jynxae",
    linkedin: "https://www.linkedin.com/in/reem-alkhalily-9a9152250/",
    email: "realkhalily@hotmail.com",
    pic: PICLINKS.MENT_CHAIR1,
  },
  ment_chair2: {
    name: "Lisa Zuniga",
    discord: "https://discord.com/users/zuuni#8270",
    linkedin: "https://www.linkedin.com/in/lisa-zuniga/",
    email: "lisamzuni143@gmail.com",
    pic: PICLINKS.MENT_CHAIR2,
  },
  secy: {
    name: "Neha Joshi",
    discord: "https://discord.com/users/neyhuh",
    linkedin: "https://www.linkedin.com/in/nehakjoshi/",
    email: "nehaykj@gmail.com",
    pic: PICLINKS.SECY,
  },
  webmaster: {
    name: "Sage Turner",
    discord: "https://discord.com/users/sayj",
    linkedin: "https://www.linkedin.com/in/sageturn01/",
    email: "sageturn01@gmail.com",
    pic: PICLINKS.WEBMASTER,
  },
};

function OfficerMain() {
  return (
    <>
      {/* Mobile Variant */}
      <div className="visible md:hidden flex flex-col overflow-y-auto">
        <img
          src={PICLINKS.BANNER}
          className="w-full h-[200px] object-cover"
          alt="2023-2024 Officer Team at First General Meeting"
        />
        <h1 className="font-poppins flex flex-row justify-center py-6 text-2xl">
          Meet The 2023-2024 Officers!
        </h1>

        {/* Mobile Officer Cards */}
        <section className="flex flex-col justify-center gap-10 pb-10">
          <OfficerCard
            position="President"
            name={OFFICERS.president.name}
            discord={OFFICERS.president.discord}
            linkedin={OFFICERS.president.linkedin}
            email={OFFICERS.president.email}
            pic={PICLINKS.PRESIDENT}
          />
          <OfficerCard
            position="VP External"
            name={OFFICERS.vp_ext.name}
            discord={OFFICERS.vp_ext.discord}
            linkedin={OFFICERS.vp_ext.linkedin}
            email={OFFICERS.vp_ext.email}
            pic={PICLINKS.VP_EXT}
          />
          <OfficerCard
            position="VP Internal"
            name={OFFICERS.vp_int.name}
            discord={OFFICERS.vp_int.discord}
            linkedin={OFFICERS.vp_int.linkedin}
            email={OFFICERS.vp_int.email}
            pic={PICLINKS.VP_INT}
          />
          <OfficerCard
            position="Prof. Development Chair"
            name={OFFICERS.prof_dev_chair1.name}
            discord={OFFICERS.prof_dev_chair1.discord}
            linkedin={OFFICERS.prof_dev_chair1.linkedin}
            email={OFFICERS.prof_dev_chair1.email}
            pic={PICLINKS.PROF_DEV_CHAIR1}
          />
          <OfficerCard
            position="Prof. Development Chair"
            name={OFFICERS.prof_dev_chair2.name}
            discord={OFFICERS.prof_dev_chair2.discord}
            linkedin={OFFICERS.prof_dev_chair2.linkedin}
            email={OFFICERS.prof_dev_chair2.email}
            pic={PICLINKS.PROF_DEV_CHAIR2}
          />
          <OfficerCard
            position="Mentorship Chair"
            name={OFFICERS.ment_chair1.name}
            discord={OFFICERS.ment_chair1.discord}
            linkedin={OFFICERS.ment_chair1.linkedin}
            email={OFFICERS.ment_chair1.email}
            pic={PICLINKS.MENT_CHAIR1}
          />
          <OfficerCard
            position="Mentorship Chair"
            name={OFFICERS.ment_chair2.name}
            discord={OFFICERS.ment_chair2.discord}
            linkedin={OFFICERS.ment_chair2.linkedin}
            email={OFFICERS.ment_chair2.email}
            pic={PICLINKS.MENT_CHAIR2}
          />
          <OfficerCard
            position="Secretary"
            name={OFFICERS.secy.name}
            discord={OFFICERS.secy.discord}
            linkedin={OFFICERS.secy.linkedin}
            email={OFFICERS.secy.email}
            pic={PICLINKS.SECY}
          />
          <OfficerCard
            position="Director of Marketing"
            name={OFFICERS.marketing_dir.name}
            discord={OFFICERS.marketing_dir.discord}
            linkedin={OFFICERS.marketing_dir.linkedin}
            email={OFFICERS.marketing_dir.email}
            pic={PICLINKS.MARKETING_DIR}
          />
          <OfficerCard
            position="Webmaster"
            name={OFFICERS.webmaster.name}
            discord={OFFICERS.webmaster.discord}
            linkedin={OFFICERS.webmaster.linkedin}
            email={OFFICERS.webmaster.email}
            pic={PICLINKS.WEBMASTER}
          />
        </section>
      </div>

      {/* Desktop Officer Cards */}
      <div className="hidden md:flex flex-col overflow-y-auto">
        <h1 className="text-center font-normal text-6xl py-6">
          Meet The 2023-2024 Officers!
        </h1>
        <img
          src={PICLINKS.BANNER}
          alt="Fall 2023 Officers"
          className="w-[1573px] h-[524px] mx-auto object-cover rounded-[20px]"
        ></img>
        {/* Desktop Officer Cards */}
        <section className="flex flex-row flex-wrap justify-center gap-10 py-10">
          <OfficerCard
            position="President"
            name={OFFICERS.president.name}
            discord={OFFICERS.president.discord}
            linkedin={OFFICERS.president.linkedin}
            email={OFFICERS.president.email}
            pic={PICLINKS.PRESIDENT}
          />
          <OfficerCard
            position="VP External"
            name={OFFICERS.vp_ext.name}
            discord={OFFICERS.vp_ext.discord}
            linkedin={OFFICERS.vp_ext.linkedin}
            email={OFFICERS.vp_ext.email}
            pic={PICLINKS.VP_EXT}
          />
          <OfficerCard
            position="VP Internal"
            name={OFFICERS.vp_int.name}
            discord={OFFICERS.vp_int.discord}
            linkedin={OFFICERS.vp_int.linkedin}
            email={OFFICERS.vp_int.email}
            pic={PICLINKS.VP_INT}
          />
          <OfficerCard
            position="Prof. Development Chair"
            name={OFFICERS.prof_dev_chair1.name}
            discord={OFFICERS.prof_dev_chair1.discord}
            linkedin={OFFICERS.prof_dev_chair1.linkedin}
            email={OFFICERS.prof_dev_chair1.email}
            pic={PICLINKS.PROF_DEV_CHAIR1}
          />
          <OfficerCard
            position="Prof. Development Chair"
            name={OFFICERS.prof_dev_chair2.name}
            discord={OFFICERS.prof_dev_chair2.discord}
            linkedin={OFFICERS.prof_dev_chair2.linkedin}
            email={OFFICERS.prof_dev_chair2.email}
            pic={PICLINKS.PROF_DEV_CHAIR2}
          />
          <OfficerCard
            position="Mentorship Chair"
            name={OFFICERS.ment_chair1.name}
            discord={OFFICERS.ment_chair1.discord}
            linkedin={OFFICERS.ment_chair1.linkedin}
            email={OFFICERS.ment_chair1.email}
            pic={PICLINKS.MENT_CHAIR1}
          />
          <OfficerCard
            position="Mentorship Chair"
            name={OFFICERS.ment_chair2.name}
            discord={OFFICERS.ment_chair2.discord}
            linkedin={OFFICERS.ment_chair2.linkedin}
            email={OFFICERS.ment_chair2.email}
            pic={PICLINKS.MENT_CHAIR2}
          />
          <OfficerCard
            position="Secretary"
            name={OFFICERS.secy.name}
            discord={OFFICERS.secy.discord}
            linkedin={OFFICERS.secy.linkedin}
            email={OFFICERS.secy.email}
            pic={PICLINKS.SECY}
          />
          <OfficerCard
            position="Director of Marketing"
            name={OFFICERS.marketing_dir.name}
            discord={OFFICERS.marketing_dir.discord}
            linkedin={OFFICERS.marketing_dir.linkedin}
            email={OFFICERS.marketing_dir.email}
            pic={PICLINKS.MARKETING_DIR}
          />
          <OfficerCard
            position="Webmaster"
            name={OFFICERS.webmaster.name}
            discord={OFFICERS.webmaster.discord}
            linkedin={OFFICERS.webmaster.linkedin}
            email={OFFICERS.webmaster.email}
            pic={PICLINKS.WEBMASTER}
          />
        </section>
      </div>
    </>
  );
}

export default OfficerMain;
