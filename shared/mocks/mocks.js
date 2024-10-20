const APOD = {
  date: "2024-02-04",
  explanation:
    "Stars are forming in the gigantic dust pillar called the Cone Nebula. Cones, pillars, and majestic flowing shapes abound in stellar nurseries where natal clouds of gas and dust are buffeted by energetic winds from newborn stars. The Cone Nebula, a well-known example, lies within the bright galactic star-forming region NGC 2264. The Cone was captured in unprecedented detail in this close-up composite of several observations from the Earth-orbiting Hubble Space Telescope. While the Cone Nebula, about 2,500 light-years away in Monoceros, is around 7 light-years long, the region pictured here surrounding the cone's blunted head is a mere 2.5 light-years across. In our neck of the galaxy that distance is just over half way from our Sun to its nearest stellar neighbors in the Alpha Centauri star system. The massive star NGC 2264 IRS, seen by Hubble's infrared camera in 1997, is the likely source of the wind sculpting the Cone Nebula and lies off the top of the image. The Cone Nebula's reddish veil is produced by dust and glowing hydrogen gas.",
  hdurl: "/nebula.png",
  media_type: "image",
  service_version: "v1",
  title: "The Cone Nebula from Hubble",
  url: "https://apod.nasa.gov/apod/image/2402/cone_hubbleschmidt_960.jpg",
};

const EARTH = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/search?q=earth",
    items: [
      {
        href: "https://images-assets.nasa.gov/video/Earth Views/collection.json",
        data: [
          {
            center: "HQ",
            title: "Earth Views",
            keywords: ["Earth", "ISS"],
            nasa_id: "Earth Views",
            date_created: "2015-04-07T00:00:00Z",
            media_type: "video",
            description:
              "Earth views from the International Space Station. City lights, auroras, sunsets, oceans, moon on the horizon an other beauty shots of our planet from space.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/Earth Views/Earth Views~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/Earth Views/Earth Views.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/audio/Ep218_Eye to the Earth/collection.json",
        data: [
          {
            center: "JSC",
            title: "HWHAP Ep218 Eye to the Earth",
            keywords: [
              "Houston",
              "podcast",
              "Johnson",
              "space",
              "center",
              "JSC",
              "international",
              "station",
              "ISS",
              "Sally Ride",
              "EarthKAM",
              "Earth",
              "Kay Taylor",
            ],
            nasa_id: "Ep218_Eye to the Earth",
            date_created: "2021-10-22T00:00:00Z",
            media_type: "audio",
            description_508: "Full transcript in the description",
            description:
              "Gary Jordan (Host): Houston, we have a podcast! Welcome to the official podcast of the NASA Johnson Space Center, Episode 218, “Eye to the Earth.” I'm Gary Jordan and I'll be your host today. On this podcast we bring in the experts, scientists, engineers, and astronauts all to let you know what's going on in the world of human spaceflight. If you're like me, you follow pretty much every astronaut on social media. And you know that when they're on board the International Space Station they like to spend time in the Cupola, the bay window that looks down at the Earth, and they share photos of incredibly beautiful parts of the planet. You might think that they're the lucky few who get to take such pictures, but there's actually a way where middle school students can get their own photos taken from station. This is part of the Sally Ride EarthKAM, or Earth Knowledge Acquired by Middle school students, program. Students pick a place on the planet of their choosing and a simple set up on the space station will take the photo for them. They learn about space, geography, social science and more. On this episode, we're going to dive deep into this program with the vice president of education at the U.S. Space and Rocket Center, Dr. Kay Taylor. So, let's get right into it. Enjoy.   [ Music]  Host: Kay Taylor, thanks so much for coming on Houston We have a Podcast today.  Kay Taylor: Thanks a lot for having me.  Host: I'm excited to talk about EarthKAM. This has been a program that I have been aware of but haven't really dove too deep into what it is and how it started, and so I'm excited to be talking to you today. But before we get into EarthKAM, I want to learn a little bit more about you: what it takes to be the person running this thing. So, Kay, tell me a little bit about yourself.  Kay Taylor: I've been at the, the U.S. Space and Rocket Center, I guess this is now my seventh year. Before that I had a career in journalism in mass communication, and I taught at the collegiate level for many years. But was a native of North Alabama, and it's interesting, I kind of thought everyone grew up sitting around the table talking about NASA missions growing up, and I discovered that, that's not the case. I am, I was born and raised in, in north Alabama. My dad worked at NASA. My mom was a teacher for many, many years. And NASA was always just sort of in the conversation. And as I went away and pursued my own career, always kept up with, with north Alabama, and particularly Huntsville, and, and NASA. And moved back to the area when my parents were a little older and, and needed a bit of assistance. And came to the U.S. Space and Rocket Center in a communications capacity, and, and then moved into the role of education. And shortly after I moved into education, NASA presented the opportunity that, that they were going to be continuing this amazing program that I had heard about called the Sally Ride EarthKAM. And what EarthKAM was, and still is today, is this amazing STEM (science, technology, engineering, and math) experience aimed at middle school students, but really open to all secondary education classrooms, to take part in live science on the International Space Station. And so, the rocket center was, was very excited when NASA let us continue the work that, that literally was begun by Dr. Sally Ride of, America's first woman in space, in, in 2016. And we've been, we’ve been going along and we're in our, we're in our second period of performance with the program, and we're continuing to reach students, not only across the country, but around the world.  Host: That's fantastic. And that's really what I wanted to get into today Kay, is, is what this is, and really how it's expanded to involve more and more people. You know I think growing up in the -- you said northern Alabama, I believe that's the Huntsville area; I want to get a sense because, to be honest, a lot of my guests are from Houston and I'm very familiar with, with what it's like here, it's very much the same. We have astronauts as neighbors, which is pretty cool. And it's, you know, it's an interesting place to grow up, and we have something, you know, like the NASA Johnson Space Center right in our backyard, and it's, it's very interesting. I wonder, when you talk about NASA was always a part of the conversation, I wonder, I wonder what that was like: can you paint a picture of just, how it was, you know, what led to your belief that this was a much larger, much widely known thing in the northern Alabama area?  Kay Taylor: Well at, it was just, it was our, it was the daily experience, of my dad would come in and, and he would be talking about you know the latest, latest, latest developments in the STS (Space Transportation System) program or came home and he said, you know, we're going to build this giant telescope; it's called Hubble. He was in the, he was in the business administration side of NASA Marshall Space Flight Center here. But we were just always talking about, you know, what the next big achievements for NASA were going to be. And I remember, you know, he, he kept me out of school when the, when the first, when the first orbiter made one of those famous 747 piggyback flights, they flew it into Huntsville so that they could test it at Marshall. And you know, we, we stood on one of the roofs of the buildings and, and watched that, you know, watched that orbiter come across, come across Marshall Space Flight Center. And I just assumed everyone was talking about it. But, but that was, you know, that was often not the case. And I think that maybe was one of the things that so attracted me to the, to the position here at the U.S. Space and Rocket Center is that the rocket center functions as the visitor center for Marshall Space Flight Center. It is our job to tell the story of Marshall Space Flight Center, and the story of space exploration. So, for me, it was just a way to, to bring what I grew up with and what I continue to keep up with, and hopefully use some of my communication skills, some of my education skills to, to make that story more widely known. And the U.S. Space and Rocket Center here in Huntsville is truly, it's truly the front porch of Huntsville, Alabama. It is, it is where NASA's story unfolds, it's where we tell the story of propulsion, it's where we tell the story of advances in spaceflight and where we're going. It's the home of Space Camp where, you know, each year thousands upon thousands of, of students come through and they, they learn about space exploration, they learn about our roots in space exploration, and then they, they kind of chart their own course from there.  Host: See, that's one thing I always am so jealous of, Kay, is when I hear these stories of, of Space Camp. I just, maybe it was my lack of my own understanding. I grew up in the Pennsylvania area and so, maybe it was just something that wasn't, wasn't close enough, right? But it's just, it sounds like a gateway, the way you describe it is perfect to, to understand more and get, get engaged with and maybe even dedicate a career to spaceflight. And that's wonderful. And you mentioned in the beginning, Kay, when you were talking about your path that led you to where you are, you talk about this program and that's really the basis of our conversation today, is this EarthKAM program. And you prefaced it with Sally Ride. You called it the Sally Ride EarthKAM. Just who is Sally Ride, and why, why is this program named after her?  Kay Taylor: Sally Ride. Sally Ride was America's first woman in space. She was, she was an accomplished astronaut, she was a fantastic scientist, she was such an ambassador for the American space program, post-Apollo generation. I think, I think Sally embodied where space exploration quickly was headed: expanded opportunity, expanded horizons. And it was actually Dr. Ride who, who proposed the, this original program, which began as a program that was called KidSat. And she, she knew that from her own experiences in space that viewing the Earth from space often changed the astronaut’s perspective of the Earth. That suddenly, you know, you're above the Earth and you look down and there's this almost fragile-looking marble that contains all of life. And, and you know, many astronauts have commented on how that change in viewpoint, that change in, in altitude, if you will, changed, changed their way of seeing the Earth. And she thought, what an amazing tool; if, if we could allow students to have kind of a similar experience to that, what if we allowed students to choose how they view the Earth? And so, she was incredibly gifted, analytical mind. She said, well let's think about this. What if we, what if we were to put a camera on the shuttle, and then as it transitioned to the, to the ISS, put a camera in space, and allow students to select where that camera photographs an image based upon where the shuttle or the ISS was passing over in orbit? And it's, it's a very straightforward concept. It took a little bit of engineering to develop the protocols that would allow students on Earth to create a digital file to upload to the ISS to control a Nikon camera aboard the International Space Station. But of course, because it's NASA it all sounds easy. But it was such a straightforward concept. And so, as I mentioned, it tested as prototype on the shuttle. But it launched on the ISS in, in 2001. And since then, being hosted through UC (University of California) San Diego at Sally Ride Science, and then later coming to us, over a million images have been requested by school children from around the globe. We've had over a million students take part in our mission weeks through, through EarthKAM. We, you know, we're anticipating two missions in the fall, coming up. And when I say missions, because it does require some crew time, because it does require assets on board the ISS, we run targeted mission weeks, typically four to five a year, and in that mission week students from around the world can, can log in and determine the orbit of the ISS, where it's passing over, and select when they would like the shutter on the camera to click, thus capturing their image of a particular geographic location. So, over the lifespan of this program we've had students from, I believe every state and over 60 countries who have done, who have done just that: logged in, studied the latitude and longitude of the orbits as the, as the ISS passed over, and determined where to operate that camera. And then through the engineering genius of, of NASA and, and the Sally Ride program, the student then receives back the image, which are held in a database. And the student can go back and find their image and know that for a moment they operated a scientific instrument aboard the International Space Station. And as we, as we are struggling through COVID and the, and the incredible, incredible tensions that our schoolteachers and our students are facing in the, the stretching of resources, the great thing about this program is there's no cost associated with it. And a teacher can sign up and, and the students can take more than one image. So, it's really, it's a great way to, to bring science into classrooms, and, and it's at no cost to the school districts.  Host: So, it sounds like, Kay, it's just, you just have to find wherever you are, it sounds like you have to find a link and then, do you have to submit, do you have to work with your students to submit their ideas, or their locations wherever they want to go; does it have to be that specific week, or can you do it like way in advance?  Kay Taylor: Nope, it's got to be within the, it's got to be within the mission weeks because --  Host: OK.  Kay Taylor: -- as I'm sure you're aware, the ISS shifts somewhat in each orbit. So, we will typically, working with the, working with some of our partners, we have some great technical partners: we have Teledyne Brown Engineering that, that is our kind of liaison between International Space Station and payloads, and the Sally Ride EarthKAM website, and then we have, we have the atmospheric sciences department at the University of Alabama Huntsville, whose graduate students and undergraduate students actually run the mission weeks for us, and then we also have great partners in the information technology and system center at University of Alabama Huntsville, who help us populate those orbits and get those published. And then a teacher logs in and registers in the, in the Sally Ride EarthKAM program at earthkam.org, and our partners at UAH send code words back to the teacher which allow the students during active mission weeks to go in and request their images. And it, so you can see, I, I said that it sounds amazingly easy, because it's NASA and was developed by Sally Ride Science. There are several steps involved, which allow targeted controlled access to, to orbit data, which is used for each specific mission, which varies from mission to mission, and occurs within selected mission weeks. So, it's, it's an elegantly elaborate, yet very practical program, that again allows school children access to real time science on the ISS.  Host: I'd be so pumped if I was a middle school student and got to click the shutter button on a camera in space. That sounds fantastic.  Kay Taylor: [Laughter] Well you know we can, we can work with you. We can work with you. Because we have, while the, while it was originally targeted for middle school students, we have, we have allowed, certainly, any teacher in public education can access our program. We're not going to say you're a fourth-grade teacher, no, no, you cannot participate. We, we've tried to expand our, our opportunities because the teacher or the educator has to register. Each registration is verified by the EarthKAM team to make sure that this is for educational purposes, and we have had success with schools taking part, afterschool learning environments coming on board with us, so, we can, we can definitely work with you if you'd like to, if you'd like to take part in an upcoming mission.  Host: All right, I'll just find the right teacher. So, so I'm stuck on the, the execution of this, right? And I got a lot of other questions, too, but, but I'm wondering during a mission week, so, say I'm a student, I'm logging on and, how many orbits can I see to make sure that if I'm interested in a particular area, how far, how far ahead in the mission week can I see to, to see maybe, maybe it won't, I have to wait a couple of days until the orbit lines up just right where I can take a picture of the thing that I want to take a picture of. So, do you get a lot of that data ahead of time --  Kay Taylor: Absolutely. Absolutely.  Host: Cool.  Kay Taylor: Absolutely. When, when we open up a mission window, we have the orbits projected for the entire mission sequence. So, and it will be broken out on the website, literally by orbital days. So, if you look at day one, there, there may not be a clear path over the target you're interested in, in capturing, or it may be that you look at the orbits and you say, hmm, given the orbits this time, maybe on day two, I want to capture that picture of Cairo; I didn't think I wanted to capture an image of Cairo, but now that I look at it, it seems that's how I want to set my target up. And you'll be able to plug in the latitude and longitude and request that image. And that's through looking at the, the orbital map associated with, with each mission week.  Host: I see, OK. Now, now to give a better sense of the, you know, these orbital maps and the perspective, you talked about this thing called the International Space Station and that's where the camera is. So, so high level, what exactly is the space station and why is this a good place to put a camera to take pictures of the Earth?  Kay Taylor: So, the International Space Station is an orbiting scientific lab that's been just quietly going about its business, zooming around the Earth about 250 miles above the surface of the Earth, for the past 22 years. It is, it's a remarkable accomplish, accomplishment, not only of, of science, but it's a remarkable accomplishment of diplomacy, because of the countries involved in building the space station, assembling the space station in space, which is a pretty incredible achievement on its own accord. But the ISS is a, a multi-national lab, and the astronauts on board the ISS have conducted, for two decades, studies in materials science, studies in the development of, of crystalline structures that are leading to better medicines to help us back here on Earth, they have demonstrated how humans can live off the Earth for extended periods of time. And the ISS has really been a staging ground as we figure out where we go next in space: whether that's the Moon, whether that's Mars, whether that's who knows where. The ISS has been a training ground, but it's also been a fantastic place of pure science. And so, to have this camera on board this, this orbiting laboratory, it, it's a, there's a constant revolution under, underneath where you see the, you see the Earth. What better vantage point to capture the Earth than from space? And we have two lenses that are interchanged on the camera. One is a 50-millimeter lens, one is 180-millimeter lens, so there is a time, a view that is a little more enhanced than at other times, depending on the lens. But over the years with, with these thousands of image requests that have come from students around the world, we have almost a historical look at the Earth from space, that's literally, that has literally mirrored the time that the ISS has been in orbit. So, we have a, kind of a 20-year time sequence of the Earth from space. Now, some of the images -- I'm not going to lie -- feature a lot of clouds, because there typically are clouds between the ISS and the Earth. But, but there are you know, there are coastlines that you can look at; by using your lat[itude] and long[itude] coordinates, you can go back through the images that we've posted and have collected over the years, you can go back and look at coastline changes. You can go back and look at, at how, how cities have grown. They're, you know, if you figure out the latitude and longitude of some, some large population centers, if images have been captured, you have a, you have a “now and then” comparison, or a time lapse. So not only is it, is it the student capturing the image, but it's then thinking about how can I take this image that I've captured, and images that have been captured in the past, and learn more? We have teachers from across disciplines who find value in bringing the EarthKAM program into their classroom. Certainly, learning about coordinates and learning about, and learning about geography is, is an important function with this particular program. As I mentioned, with the clouds, you get a really great view of clouds from space, which is a different perspective than you get of clouds from Earth. So there's, there's a tremendous utility there. And one of my favorite applications, we talk about, we talk about EarthKAM with the various professional development programs for teachers we run, one of my favorite applications is when art teachers talk about how they use EarthKAM in their classrooms, where they talk about the colors and textures of the planet, or when they, when they show these, these wonderful photos with, maybe the clouds give the appearance of the Earth below this, almost this pointillist or even like some kind of Jackson Pollock effect, that they say that using photos of the Earth as a way to inspire creativity from an artist’s eye. That's something we don't often think about when we're talking about something that is traditionally a STEM education experience. But, you know, it all interconnects.  Host: Yeah, and it sounds that way. It sounds like there's a lot of different applications to this. You mentioned, you mentioned, when you talked about the International Space Station as a platform for all this research and in this particular case, education activities, my mind started going to just how it works. I'm thinking about the technical aspect of things. You mentioned changing lenses, you mentioned a camera. How exactly is the EarthKAM, we'll call it equipment, how is the equipment set up on the International Space Station to perform this work?  Kay Taylor: Sure. Again, here's, here's the elegance of simplicity. It is a camera that is connected to a laptop. And on the laptop, I mean the camera is connected by a cable to the laptop. And the, and the laptop has, has uploaded to it from here in Huntsville the camera control files, which tell the camera – which is of course an electronic DSLR (digital single lens reflex) camera -- when to, I don't want to say \"fire,\" I will say to depress the shutter, which causes the shutter to collapse and capture the image. The, the camera files are compiled when students go through the web portal and enter their latitude and longitude data. They can, they can include a bit more secondary data, like, like, almost like labels. They can label, you know, “Brandon's shot of the pyramids of Egypt.” Or you know, “the Colosseum of Rome, or “the Amazon basin.” Really seeing some astounding photos of the Mississippi River flowing into the, the Gulf. And you could, you could put that tag on it, so that there's a little, there's a little metadata there that you can understand what it is you're looking at. So that goes into the, the photo request. And those requests are compiled. And then they literally, the electronic file is transmitted to the, to the ISS, to the laptop on board, which then operates the shutter syncing up the latitude and longitude with the orbital passover. It captures the, captures the image and then the images are sent back, usually within a day or so they will appear populated on the website. And a student, using the code word, they can check their file and they can download the photo. They can save it on their computer. They can then use that photo…I don't know, in a report that explains how they spent their time on the ISS, or if they are, if they're looking to do some sort of, using that data in support of another educational program. It's all there.  Host: So, I -  Kay Taylor: It's literally…go ahead.  Host: I was just going to ask because I'm thinking, I'm thinking of the different shots you can get, right? When you're executing this, and it sounds like you're getting the images and it's going through this web portal. You talked about changing, changing lenses at some point. Is that per mission week? So, for this mission week you get, you get this lens and then this week you're going to get some nice close ups and then another week you'll get, or are astronauts going on and changing lenses during, during the mission week?  Kay Taylor: The astronaut will, one of the astronauts on board the International Space Station will change out the lens, typically once during a mission, about mid-way through, we’ll go from a 180 to a 50-millimeter lens. So, in both instances, because of the, because the International Space Station is roughly 250 miles above the surface of the Earth, you're not going to get, you're not going to be able to get a shot of your house. You know what I'm saying? It's, but the 180 or the 50 does change the field of view. If you're, if you're familiar with photography, if you've taken photos, you know that the smaller the number of the millimeter lens -- so the 50-millimeter lens -- has a wider view than the 180-millimeter lens. The 180 tends to, if you were to take pictures side-by-side, the 180 would appear to be of a smaller area by, by field of view. And you may not -- I don't think you really want to get into that at all on your podcast, because I'm kind of butchering it, and it's kind of in the weeds. The bottom line though is at midway point in the mission week an astronaut does go in and change the lens out.  Host: Very cool. Yeah. And, and the weeds are great. We like details here and that's for sure. So, you talked about the way that teachers and schools are able to access the EarthKAM program. You mentioned, you mentioned an EarthKAM portal. Can you talk about how that works? How a, if a teacher is interested in working with your program and, and decides to submit a registration and gets approved, how they work with EarthKAM to, to execute some of this?  Kay Taylor: Right. So once a teacher has, has registered for the program, as we get closer to mission weeks, we send out communications to let, to let the teacher know when we've posted the orbits. Because by, as we get, as we get closer to the mission week, we can accurately project where the International Space Station will be passing above Earth. So now it's time for the students to look at those orbits and select their targets. When they select the target they would like to photograph, the EarthKAM program sends the teacher a list of code words, and it's a random sequence of letters and numbers, that then the students go into the portal and enter that code word and then it also allows them to enter the latitude and longitude that they wish to target. And from there they, when they hit submit, at different points in the day during mission week, those files are uploaded to the International Space Station, and the laptop cycles through those requests and captures those images, which are then sent back to Earth and are cleaned up, and are then sent to the, our EarthKAM portal where we store them.  Host: OK. And yeah, and you already mentioned that a lot of these are searchable, so, and there's a big repository of images already, given the amount of participation, right? You talked about, you talked about all the schools, you said every state and I think you said 60 countries was the number that you said. I wonder if you have a sense, based on your history with U.S. Space and Rocket Center, and with Earth, with this EarthKAM project, how you've seen the program grow and expand and reach new audiences. What have you seen just in your tenure with U.S. Space and Rocket Center?  Kay Taylor: You know, it's interesting in looking at the data we have from the, from the missions, from, from schools around the country, and schools around the world. There are certain states where we always, we just know we're going to have good participation from those states. And not surprisingly, you might call some of those states “space states.” Texas and Florida, California: great participation. Then you see other states that maybe you wouldn't actually think of participating in strong numbers as well. The same goes with our international partners. There are some partners that have been long-standing participants with Sally Ride EarthKAM. Indeed, there are some schools that have been long-time participants with the program. We have tremendous participation from countries like India, Poland -- Poland has been a participant with this program for the entire two decades. So, I think it's, what we've been striving to do is increase the educational visibility of the program, and the educational utility of the program. And one of the things that, that has been, I think, a nice development, has been that we've been able to offer more students and more classes additional code words, and we've encouraged teachers, if we sent you enough code words for each of your students to submit an image, send us another request so we can give you more code words. And we have expanded the number of image requests and the number of images we're capturing, because, you know, you have to realize the program is somewhat bounded because there are only so many seconds in the mission week. And when the camera is operating at, at full speed it can take, it can snap an image at about 1 to 2 seconds apart. So, you know, you can't say well, we'll accommodate 300 million images over the course of the week, because literally the camera can only function as quickly as the camera can function and recover. So what we've been, what we've been focusing on is trying to reach broader audiences -- as I mentioned, it was originally begun as a middle school program -- we're trying to show utility for that teacher. We're trying to show the, we're trying to demonstrate ways that, that a first-grade teacher or a high school teacher can find value in using the science on board the ISS. So, while we're seeking to expand reach, we're also seeking to expand accessibility.  Host: Very good. And so, building off of that, you know, I wonder what kind of support the EarthKAM project has? I know NASA is one of the agencies that support Sally Ride EarthKAM, and that's, that's a very large reason why we're discussing this today is because we're talking about NASA's overall efforts to, for Earth science and Earth-based projects and this is a big one because of its own unique reach. But I wonder who else is able to support Sally Ride EarthKAM and the support that you're getting?  Kay Taylor: This is a NASA outreach program, and we manage the program. As I mentioned, we have, we have subcontracting partners in the University of Alabama Huntsville and Teledyne Brown Engineering. And then we all coordinate and work with our, our partners at NASA Marshall and NASA Johnson [Space Center] to accomplish this, this amazing outreach effort that has such global reach and is just, is just a way to, to put education at the forefront, and showcasing the importance of international participation and cooperation in space.  Host: Wonderful. Now I wonder, you, you going back to the schools for a second. We talked a lot about how the, you know, how the equipment works and how schools are engaging. But I wonder if, you know, in your years of supporting Sally Ride EarthKAM, if you've heard some anecdote from some teachers on how this has impacted students or different teachers lessons on how they approach unique subjects like space and coordinates and geography or Earth science, clouds, whatever it may be, I wonder if you have some anecdotes that have been passed your way on, on how this program is reaching and influencing kids and teachers?  Kay Taylor: Sure. I, I've had students, excuse me, I've had teachers tell me that students have used their EarthKAM photograph to show that there are no borders visible in space, which is a pretty profound thought. I've had, I've had teachers describe how their students were keen to look at the images to try and, and determine what effect humans are having on the Earth, again, by trying to match up as best possible an image they've taken with that same area taken at some point in the past. I've had teachers discuss how students use the, use the program to, to demonstrate real-time phenomena: we've had a couple of fantastic photographs of hurricanes, volcanoes, flood areas. Students are using the program to get a better perspective of their Earth in very real time. They would direct their, their photographs based upon something they had read about or heard about in the news. I know of one teacher who had a goal in their classroom to try and capture soccer stadiums of Europe. I mean, you know, so, so the topics, the topics can range. I had a teacher describe how he had used the EarthKAM as a way for his students to document life in Cuba. And this was for a high school level world civ[ilization] class. So, I love to hear how teachers have found to, to use the program, because the teachers are the real innovators. But, and whenever I see something that is truly cross disciplinary, I love it. And then, and then as I mentioned, it's a great way to study clouds.  Host: Yeah, this is, this is absolutely fascinating just because you know, you think, you got students taking pictures of the Earth; OK, great. But what are they doing with it? And it sounds like the creativity here is, is limitless. I wonder what you learned, you know, from when you first started, how your mind has expanded, just based on some of the input and based on some of the maybe feedback that you've received, that can be implemented into the program going forward.  Kay Taylor: Well it's, I think, I think what I've learned is that Australia just doesn't take a bad photo, you know? It's just, Australia is just like the most photogenic continent we have. I learned that. The blues, the blues of the water, the oranges, the reds, the greens, the grays of the land mass itself; it's just, if, if Earth had a supermodel it's probably going to be Australia. I think, I think for myself, I love looking at, on these static images, the movement of the Earth. And by that I mean, images of clouds, images of water, images of sand, images of coastlines, all of this that’s captured in that split second, you're seeing, you're seeing this dynamic, dynamic moving Earth. And there's just, you know, there's just, to use the phrase, there's a vibe about it, there is. It's like this vibration about it. I think that's been a lot of fun. But again, I turn completely to the teachers as the innovators, because they're finding ways to, to bring in art history, politics, you know, sociology, geology, geography; they're the ones who really push the program. We just seek to, to give a program to them that they can come back to again and again.  Host: And that's, that's sort of where I want to leave off, Kay, is asking you, you know, you mentioned the growth of the program. It's been around for a number of years, but now you're all over the United States and all over the world. And you mentioned that you're trying to reach audiences beyond middle school, you talked about earlier than middle school and even there are some high school applications that could be used for something, something unique as a civics class, right? But I wonder what excites you thinking about the potential of the program and going forward, and the continued use of, of this camera and these views coming from the International Space Station for years to come?  Kay Taylor: Well certainly. We're going to be, we're going to be shifting over to a newer model Nikon camera, and with that we're going to have enhanced richness in the images. Because of the, because of the, the increased and improved optics, we may be able to better push a night photography experience, because currently, because it is just a standard camera loaded into, into one of the windows facing Earth, you cannot photograph in, in periods of darkness as the, as the space station flies over. The Sun has to be reflecting off the Earth for you to capture the image. With this new Nikon that we've got coming on board, we may be able to really push that and capture some nighttime technology with, with nighttime light, you realize your shutter speed is slowed to capture the light, and the International Space Station is trucking along at about 17,000 miles an hour. So that's difficult. But we're looking forward to testing it out and seeing if we can capture nighttime images of Earth, which would be a great way to study, first of all, the beauty of night lights, but it would also allow you to talk about dark skies, light pollution, it would allow you to highlight the human footprints at night on Earth. So, you know, the ability to capture night photography on Earth would be great. But also, just, just getting the newer camera aboard, we're upgrading the camera files so we should have better performance of the program, being able to use the enhanced optics clearer, higher resolution images. That at the same time, as you know, if you increase the size of the files, you're increasing the data needs, so we're going to have to try and hit a fine balance between, between working the camera in tandem with a laptop and capturing larger image files. But we have, we have about 20 years of data. And you can see over time, with upgrades to the software and upgrades to the camera, you can see better images. I think when we're able to bring this new camera online, which should be this calendar year, I think the images are only going to get better through the program.  Host: That is super exciting, Kay. And I think that's a perfect place to leave off is just to, with the anticipation of some great technology to come. So, Kay, I really want to thank you so much for your participation in the podcast today. I certainly learned a lot about this program and a lot of the unique ways that just images from International Space Station can, can be used, and it is super-exciting to see the reach and how it's reaching students and teachers, and getting folks involved and spreading awareness of what we do on the space station. So, Kay thanks again for coming on this podcast and sharing what you do.  Kay Taylor: I -- really appreciate you reaching out. I am so glad to be a part of this incredible podcast. And I would just say for, for my final word, anyone who would be interested in joining up on our next mission, it's earthkam.org. You can, you can work with us. We're going to be, as I noted, we're going to be upgrading the optics, we're going to be upgrading the, the camera files, and we're going to in the next year, upgrade the website, hopefully give a cleaner experience. So, come along with us and join us four to five times a year and take a picture from space.  Host: [Laughter] All right, thanks so much, Kay. Have a good one.  Kay Taylor: Thanks.  [ Music]  Host: Hey thanks for sticking around! I hope you learned something today with Dr. Kay Taylor. I know I did. I didn't really know a lot about the Sally Ride EarthKAM program, but now I do. It's one of the many NASA experiments or educational programs that we have on board the International Space Station. Check them all out at NASA.gov/ISS. If you're into podcasts, we're just one of many at NASA. You can check them all out at NASA.gov/podcasts. We have our full collection of episodes there as well as transcripts for all of those episodes. If you want to talk to us though, we're on the Johnson Space Center pages of Facebook, Twitter and Instagram. Just use the hashtag #AskNASA on your favorite platform to submit an idea for the show and make sure to mention it's for us at Houston we have a Podcast. This episode was recorded on August 30, 2021. Thanks again to Alex Perryman, Pat Ryan, Norah Moran, Belinda Pulido, Rachel Barry and Erin Anthony. And of course, thanks again to Kay Taylor for taking the time to come on the show. Give us a rating and feedback on whatever platform you're listening to us on and tell us what you think of our podcast. We'll be back next week.",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/GSFC_20140421_EarthOrbit_m11525/collection.json",
        data: [
          {
            album: ["Earth"],
            description:
              "A highlight reel of some of the best images and data visualizations of the planet in 2013 from NASA and partner agency satellites.",
            title: "Earth from Orbit 2013",
            location: "Goddard Space Flight Center",
            nasa_id: "GSFC_20140421_EarthOrbit_m11525",
            media_type: "video",
            keywords: ["Earth", "Earth Day", "Earth Observing Fleet"],
            date_created: "2014-04-21T00:00:00Z",
            description_508:
              "A highlight reel of data visualizations and observations of Earth from 2013.",
            secondary_creator: "Jefferson Beck, Katrina Jackson",
            center: "GSFC",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20140421_EarthOrbit_m11525/GSFC_20140421_EarthOrbit_m11525~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20140421_EarthOrbit_m11525/GSFC_20140421_EarthOrbit_m11525.vtt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/NHQ_2020_0423_NASA Science Live - Earth Day/collection.json",
        data: [
          {
            center: "HQ",
            title: "NASA Science Live: Earth Day at Home [Episode 14]",
            nasa_id: "NHQ_2020_0423_NASA Science Live - Earth Day",
            media_type: "video",
            keywords: [
              "NASA Science Live",
              "Earth Day",
              "EarthDayatHome",
              "NSL",
              "Dalia Kirschbaum",
              "Jim Bridenstine",
              "Sean Clarke",
              "Annie Meier",
              "Ven Chirayath",
            ],
            date_created: "2020-04-22T00:00:00Z",
            description_508:
              "NASA Science Live: Earth Day at Home [Episode 14]",
            secondary_creator: "Emily Furfaro",
            description:
              "Happy Earth Day! Join NASA experts on the 50th anniversary of Earth Day as we explore important discoveries made about our planet, talk with teams creating green technology that benefits life on Earth, explore a new type of aircraft making flight greener and cleaner, and hear from a NASA inventor who has turned coral reef science into an interactive app that allows you to participate in science from home. Celebrate #EarthDayatHome with NASA.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2020_0423_NASA Science Live - Earth Day/NHQ_2020_0423_NASA Science Live - Earth Day~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2020_0423_NASA Science Live - Earth Day/NHQ_2020_0423_NASA Science Live - Earth Day.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/jsc2017m001088_Top-17-Earth-Images-of-2017-MP4/collection.json",
        data: [
          {
            center: "JSC",
            title: "jsc2017m001088_Top-17-Earth-Images-of-2017",
            keywords: ["jsc2017m001088_Top-17-Earth-Images-of-2017"],
            nasa_id: "jsc2017m001088_Top-17-Earth-Images-of-2017-MP4",
            date_created: "2017-12-27T00:00:00Z",
            media_type: "video",
            description:
              "Top 17 Earth Images of 2017     The astronauts and cosmonauts on the International Space Station take pictures of Earth out their   windows nearly every day, and over a year that adds up to thousands of photos. The people at the   Earth Science and Remote Sensing Unit at NASA’s Johnson Space Center in Houston had the enviable job   of going through this year’s crop to pick their top 17 photos of Earth for 2017—here’s what they   chose!     Gateway to Astronaut Photography of Earth: https://eol.jsc.nasa.gov/",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/jsc2017m001088_Top-17-Earth-Images-of-2017-MP4/jsc2017m001088_Top-17-Earth-Images-of-2017-MP4~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/jsc2017m001088_Top-17-Earth-Images-of-2017-MP4/jsc2017m001088_Top-17-Earth-Images-of-2017-MP4.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/FD 19 Earth/collection.json",
        data: [
          {
            center: "JSC",
            date_created: "2022-12-04T00:00:00Z",
            description:
              "art001m1203372248 (Dec. 4, 2022) Orion captured this video of the Earth from a camera mounted on one of its solar arrays on the 19th day of the Artemis I mission. The spacecraft was over 220,000 miles away from Earth, and over 20,000 miles from the Moon.",
            keywords: [
              "Orion",
              "Earth",
              "Artemis I Resource Reel",
              "Artemis",
              "Artemis I",
            ],
            media_type: "video",
            nasa_id: "FD 19 Earth",
            title: "Flight Day 19: Looking Toward Earth",
            album: ["Artemis_I"],
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/FD 19 Earth/FD 19 Earth~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/FD 19 Earth/FD 19 Earth.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00342/collection.json",
        data: [
          {
            center: "JPL",
            title: "The Earth & Moon",
            nasa_id: "PIA00342",
            date_created: "1998-06-04T18:10:28Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "During its flight, NASA’s Galileo spacecraft returned images of the Earth and Moon. Separate images of the Earth and Moon were combined to generate this view. ",
            secondary_creator: "NASA/JPL/USGS",
            description:
              "During its flight, NASA’s Galileo spacecraft returned images of the Earth and Moon. Separate images of the Earth and Moon were combined to generate this view.  http://photojournal.jpl.nasa.gov/catalog/PIA00342",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00342/PIA00342~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/AFRC_2019_0107_Meet NASAs 2020 Earth Expeditions/collection.json",
        data: [
          {
            center: "AFRC",
            title: "Meet NASA's 2020 Earth Expeditions",
            nasa_id: "AFRC_2019_0107_Meet NASAs 2020 Earth Expeditions",
            media_type: "video",
            keywords: [
              "Earth Expeditions",
              "Wildfires",
              "Armstrong Flight Research Center",
            ],
            date_created: "2020-01-07T00:00:00Z",
            description:
              "Did you know NASA studies snowstorms, sinking coastlines, wildfires and many other processes affecting life on Earth? Join our experts live as we preview five new airborne science campaigns taking to the field in 2020 to explore questions critical to understanding our home planet.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/AFRC_2019_0107_Meet NASAs 2020 Earth Expeditions/AFRC_2019_0107_Meet NASAs 2020 Earth Expeditions~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/AFRC_2019_0107_Meet NASAs 2020 Earth Expeditions/AFRC_2019_0107_Meet NASAs 2020 Earth Expeditions.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00122/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth - India and Australia",
            nasa_id: "PIA00122",
            date_created: "1996-02-08T10:48:12Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "This color image of the Earth was obtained by NASA’s Galileo spacecraft on Dec. 11, 1990, when the spacecraft was about 1.5 million miles from the Earth. ",
            secondary_creator: "NASA/JPL",
            description:
              "This color image of the Earth was obtained by NASA’s Galileo spacecraft on Dec. 11, 1990, when the spacecraft was about 1.5 million miles from the Earth.  http://photojournal.jpl.nasa.gov/catalog/PIA00122",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00122/PIA00122~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00123/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth - Pacific Ocean",
            nasa_id: "PIA00123",
            date_created: "1996-01-29T14:44:56Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "This color image of the Earth was obtained by NASA’s Galileo spacecraft early Dec. 12, 1990, when the spacecraft was about 1.6 million miles from the Earth.",
            secondary_creator: "NASA/JPL",
            description:
              "This color image of the Earth was obtained by NASA’s Galileo spacecraft early Dec. 12, 1990, when the spacecraft was about 1.6 million miles from the Earth.  http://photojournal.jpl.nasa.gov/catalog/PIA00123",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00123/PIA00123~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/GSFC_20190419_Earth_m13188_Orbit/collection.json",
        data: [
          {
            album: ["Earth"],
            center: "GSFC",
            title: "Earth from Orbit 2019: How NASA Satellites #PictureEarth",
            location: "Goddard Space Flight Center",
            nasa_id: "GSFC_20190419_Earth_m13188_Orbit",
            date_created: "2019-04-19T00:00:00Z",
            keywords: [
              "Atmospheric Science",
              "Landsat",
              "Natural Hazards",
              "Sea Ice",
              "Typhoons",
              "Earth Observatory",
              "Earth Observing Fleet",
              "ISS",
              "Earth",
              "Fleet",
              "Hurricane Maria",
            ],
            media_type: "video",
            description_508:
              "This Earth Day, NASA invites you to share how you #PictureEarth. For inspiration, NASA collected some of the best and most inconic satellite images and data visualizations capture over the last year. NASA's space-based view of our planet, and the way it's changing, helps humans understand Earth better.",
            secondary_creator: "Katie Jepson, Kathryn Mersmann",
            description:
              "This Earth Day, NASA invites you to share how you #PictureEarth. For inspiration, NASA collected some of the best and most inconic satellite images and data visualizations capture over the last year. NASA's space-based view of our planet, and the way it's changing, helps humans understand Earth better.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20190419_Earth_m13188_Orbit/GSFC_20190419_Earth_m13188_Orbit~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20190419_Earth_m13188_Orbit/GSFC_20190419_Earth_m13188_Orbit.vtt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA13474/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth and Moon from 114 Million Miles",
            nasa_id: "PIA13474",
            date_created: "2010-08-17T18:03:56Z",
            keywords: ["Earth", "MESSENGER"],
            media_type: "image",
            description_508: "Earth and Moon from 114 Million Miles",
            secondary_creator:
              "NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington",
            description: "Earth and Moon from 114 Million Miles",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA13474/PIA13474~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00134/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth - Moon Conjunction",
            nasa_id: "PIA00134",
            date_created: "1996-01-29T14:50:07Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "Earth Moon Conjuntion image created during Galileo second flyby",
            secondary_creator: "NASA/JPL",
            description:
              "Earth Moon Conjuntion image created during Galileo second flyby.  http://photojournal.jpl.nasa.gov/catalog/PIA00134",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00134/PIA00134~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/a-sky-view-of-earth-from-suomi-npp_16611703184_o/collection.json",
        data: [
          {
            center: "GSFC",
            title: "A Sky View of Earth From Suomi NPP",
            keywords: ["Earth", "NPP"],
            nasa_id: "a-sky-view-of-earth-from-suomi-npp_16611703184_o",
            date_created: "2015-04-22T00:00:00Z",
            media_type: "image",
            description:
              "This composite image of southern Africa and the surrounding oceans was captured by six orbits of the NASA/NOAA Suomi National Polar-orbiting Partnership spacecraft on April 9, 2015, by the Visible Infrared Imaging Radiometer Suite (VIIRS) instrument. Tropical Cyclone Joalane can be seen over the Indian Ocean.  Winds, tides and density differences constantly stir the oceans while phytoplankton continually grow and die. Orbiting radiometers such as VIIRS allows scientists to track this variability over time and contribute to better understanding of ocean processes that are beneficial to human survival on Earth. The image was created by the Ocean Biology Processing Group at NASA's Goddard Space Flight Center in Greenbelt, Maryland.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/a-sky-view-of-earth-from-suomi-npp_16611703184_o/a-sky-view-of-earth-from-suomi-npp_16611703184_o~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA17542/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth from Juno",
            nasa_id: "PIA17542",
            date_created: "2013-10-21T21:36:09Z",
            keywords: ["Earth", "Juno"],
            media_type: "image",
            description_508:
              "On Oct. 9, NASA Juno spacecraft flew past Earth, using our home planet gravity to get the final boost it needed to reach Jupiter. The JunoCam instrument captured this monochrome view of Earth.",
            secondary_creator: "NASA/JPL-Caltech/Malin Space Science Systems",
            description:
              "On Oct. 9, NASA Juno spacecraft flew past Earth, using our home planet gravity to get the final boost it needed to reach Jupiter. The JunoCam instrument captured this monochrome view of Earth.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA17542/PIA17542~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00729/collection.json",
        data: [
          {
            center: "JPL",
            title: "South Polar Projection of Earth",
            nasa_id: "PIA00729",
            date_created: "1997-09-10T10:10:25Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "This view of the Earth shows a wonderfully unique but physically impossible view of the southern hemisphere and Antarctica. While a spacecraft could find itself directly over the Earth pole, roughly half of the image should be in darkness!",
            secondary_creator: "NASA/JPL",
            description:
              "This view of the Earth shows a wonderfully unique but physically impossible view of the southern hemisphere and Antarctica. While a spacecraft could find itself directly over the Earth pole, roughly half of the image should be in darkness!",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00729/PIA00729~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA01967/collection.json",
        data: [
          {
            center: "JPL",
            title: "Crescent-shaped Earth and Moon",
            nasa_id: "PIA01967",
            date_created: "1999-05-15T10:03:01Z",
            keywords: ["Earth", "Voyager"],
            media_type: "image",
            description_508:
              "This picture of a crescent-shaped Earth and Moon -- the first of its kind ever taken by a spacecraft -- was recorded Sept. 18, 1977, by NASA Voyager 1 when it was 7.25 million miles 11.66 million kilometers from Earth.",
            secondary_creator: "NASA/JPL",
            description:
              "This picture of a crescent-shaped Earth and Moon -- the first of its kind ever taken by a spacecraft -- was recorded Sept. 18, 1977, by NASA Voyager 1 when it was 7.25 million miles 11.66 million kilometers from Earth.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA01967/PIA01967~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00232/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth - Departing Image by Galileo",
            nasa_id: "PIA00232",
            date_created: "1996-02-08T13:00:10Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "This color image of the Earth was taken by NASA’s Galileo spacecraft on December 11 as it departed on its 3-year flight to Jupiter, about 2 1/2 days after the second Earth flyby.",
            secondary_creator: "NASA/JPL",
            description:
              "This color image of the Earth was taken by NASA’s Galileo spacecraft on December 11 as it departed on its 3-year flight to Jupiter, about 2 1/2 days after the second Earth flyby.  http://photojournal.jpl.nasa.gov/catalog/PIA00232",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00232/PIA00232~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/Webb_Beauty_Last Sunshield Deploy on Earth/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Webb Beauty - The Last Sunshield Deploy on Earth",
            photographer: "Michael McClare",
            nasa_id: "Webb_Beauty_Last Sunshield Deploy on Earth",
            media_type: "video",
            keywords: [
              "Webb",
              "James Webb Space Telescope",
              "JWST",
              "sunshield",
              "spacecraft",
              "cleanroom",
              "optics",
              "crygonics",
              "kapton",
              "gold",
              "mirror",
              "mirrors",
            ],
            date_created: "2021-06-14T00:00:00Z",
            description_508:
              "Beauty shots of Webb during the 2 day period its sunshield was fully deployed on Earth for the last time.",
            description:
              "Beauty shots of Webb during the 2 day period its sunshield was fully deployed on Earth for the last time.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/Webb_Beauty_Last Sunshield Deploy on Earth/Webb_Beauty_Last Sunshield Deploy on Earth~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/Webb_Beauty_Last Sunshield Deploy on Earth/Webb_Beauty_Last Sunshield Deploy on Earth.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/EARTH_DAY_2019_WEB/collection.json",
        data: [
          {
            center: "HQ",
            title: "NASA Earth Day 2019 Poster - Web",
            keywords: [
              "NASA",
              "Earth Day 2019",
              "Earth Day",
              "Earth Day Poster",
              "NASA Science",
              "NASA Science Earth",
              "NASA Downloads",
              "NASA Artwork",
              "Jenny Mottar",
            ],
            nasa_id: "EARTH_DAY_2019_WEB",
            date_created: "2019-04-17T00:00:00Z",
            media_type: "image",
            description_508: "NASA Earth Day 2019 Poster - Web",
            description: "NASA Earth Day 2019 Poster - Web",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/EARTH_DAY_2019_WEB/EARTH_DAY_2019_WEB~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/EARTH_DAY_2019_PRINT/collection.json",
        data: [
          {
            center: "HQ",
            title: "NASA Earth Day 2019 Poster - Print",
            keywords: [
              "NASA",
              "Earth Day 2019",
              "Earth Day",
              "Earth Day Poster",
              "NASA Science",
              "NASA Science Earth",
              "NASA Downloads",
              "NASA Artwork",
              "Jenny Mottar",
            ],
            nasa_id: "EARTH_DAY_2019_PRINT",
            date_created: "2019-04-17T00:00:00Z",
            media_type: "image",
            description_508: "NASA Earth Day 2019 Poster - Print",
            description: "NASA Earth Day 2019 Poster - Print",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/EARTH_DAY_2019_PRINT/EARTH_DAY_2019_PRINT~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00013/collection.json",
        data: [
          {
            center: "JPL",
            title: "Crescent Earth and Moon",
            nasa_id: "PIA00013",
            date_created: "1996-08-29T17:29:40Z",
            keywords: ["Earth", "Voyager"],
            media_type: "image",
            description_508:
              "This picture of a crescent-shaped Earth and Moon, the first of its kind ever taken by a spacecraft, was recorded Sept. 18, 1977, by NASA Voyager 1 when it was 7.25 million miles 11.66 million kilometers from Earth.",
            secondary_creator: "NASA/JPL",
            description:
              "This picture of a crescent-shaped Earth and Moon, the first of its kind ever taken by a spacecraft, was recorded Sept. 18, 1977, by NASA Voyager 1 when it was 7.25 million miles 11.66 million kilometers from Earth. http://photojournal.jpl.nasa.gov/catalog/PIA00013",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00013/PIA00013~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/GSFC_20150420_Orbit_m11858_2014/collection.json",
        data: [
          {
            album: ["Earth"],
            center: "GSFC",
            title: "Earth from Orbit 2014",
            location: "Goddard Space Flight Center",
            nasa_id: "GSFC_20150420_Orbit_m11858_2014",
            date_created: "2015-04-20T00:00:00Z",
            media_type: "video",
            description_508: "Earth from Orbit 2014.",
            secondary_creator: "Jefferson Beck, Eric Sokolowsky",
            description:
              "Every day of every year, NASA satellites provide useful data about our home planet, and along the way, some beautiful images as well. This video includes satellite images of Earth in 2014 from NASA and its partners as well as photos and a time lapse video from the International Space Station. We’ve also included a range of data visualizations, model runs, and a conceptual animation that were produced in 2014 (but in some cases might have been utilizing data from earlier years.) Below is a full list of the images included.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20150420_Orbit_m11858_2014/GSFC_20150420_Orbit_m11858_2014~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20150420_Orbit_m11858_2014/GSFC_20150420_Orbit_m11858_2014.vtt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/Earth Views from the International Space Station/collection.json",
        data: [
          {
            center: "HQ",
            title: "Earth Views from the International Space Station",
            nasa_id: "Earth Views from the International Space Station",
            media_type: "video",
            keywords: ["Earth Views", "International Space Station", "HDEV"],
            date_created: "2019-04-30T00:00:00Z",
            description:
              "The International Space Station’s High Definition Earth Viewing (HDEV) experiment is an external camera platform located on the Columbus module of the space station. In addition to providing beautiful views of Earth, one of the goals of HDEV is to monitor the longevity and quality of its image sensors in the space environment. HDEV operations began April 30, 2014 and only a single bad pixel has been identified.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/Earth Views from the International Space Station/Earth Views from the International Space Station~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/Earth Views from the International Space Station/Earth Views from the International Space Station.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00076/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth - Full Disk View of Africa",
            nasa_id: "PIA00076",
            date_created: "1996-01-29T14:21:26Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "This color image of the Earth was obtained by NASA Galileo spacecraft in Dec. 1990, when the spacecraft was about 1.5 million miles from the Earth. Africa stretches from the center to the top of the picture with the Arabian Peninsula off to its right.",
            secondary_creator: "NASA/JPL",
            description:
              "This color image of the Earth was obtained by NASA Galileo spacecraft in Dec. 1990, when the spacecraft was about 1.5 million miles from the Earth. Africa stretches from the center to the top of the picture with the Arabian Peninsula off to its right.  http://photojournal.jpl.nasa.gov/catalog/PIA00076",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00076/PIA00076~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/The-Earth-4K-Extended-Edition_MP4/collection.json",
        data: [
          {
            center: "JSC",
            title: "The-Earth-4K-Extended-Edition_MP4",
            nasa_id: "The-Earth-4K-Extended-Edition_MP4",
            date_created: "2018-02-12T00:00:00Z",
            media_type: "video",
            description: "The-Earth-4K-Extended-Edition_MP4",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/The-Earth-4K-Extended-Edition_MP4/The-Earth-4K-Extended-Edition_MP4~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/The-Earth-4K-Extended-Edition_MP4/The-Earth-4K-Extended-Edition_MP4.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA17936/collection.json",
        data: [
          {
            center: "JPL",
            title: "Bright Evening Star Seen from Mars is Earth",
            nasa_id: "PIA17936",
            date_created: "2014-02-06T19:07:22Z",
            keywords: ["Earth", "Mars Science Laboratory MSL"],
            media_type: "image",
            description_508:
              "This view of the twilight sky and Martian horizon taken by NASA Curiosity Mars rover includes Earth as the brightest point of light in the night sky. Earth is a little left of center in the image, and our moon is just below Earth.",
            secondary_creator: "NASA/JPL-Caltech/MSSS/TAMU",
            description:
              "This view of the twilight sky and Martian horizon taken by NASA Curiosity Mars rover includes Earth as the brightest point of light in the night sky. Earth is a little left of center in the image, and our moon is just below Earth.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA17936/PIA17936~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00558/collection.json",
        data: [
          {
            center: "JPL",
            title: "2001 Mars Odyssey Images Earth Visible and Infrared",
            nasa_id: "PIA00558",
            date_created: "2001-04-26T18:17:21Z",
            keywords: ["Earth", "2001 Mars Odyssey"],
            media_type: "image",
            description_508:
              "NASA 2001 Mars Odyssey Thermal Emission Imaging System THEMIS acquired these images of the Earth using its visible and infrared cameras as it left the Earth.",
            secondary_creator: "NASA/JPL/Arizona State University",
            description:
              "NASA 2001 Mars Odyssey Thermal Emission Imaging System THEMIS acquired these images of the Earth using its visible and infrared cameras as it left the Earth.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00558/PIA00558~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/GSFC_20120723_Landsat_m11052_Earth_Art/collection.json",
        data: [
          {
            album: ["Landsat"],
            center: "GSFC",
            title: 'Best of "Earth As Art" - Top Five',
            location: "Goddard Space Flight Center",
            nasa_id: "GSFC_20120723_Landsat_m11052_Earth_Art",
            date_created: "2012-07-23T00:00:00Z",
            keywords: ["Landsat", "Earth"],
            media_type: "video",
            description_508:
              'Counting down the Top Five Earth As Art images, as voted on by the public. Landsat has been collecting data of the Earth\'s surface since 1972. Some of the images are visually striking, and they have been selected for the "Earth As Art" collection. These are the best.',
            secondary_creator:
              "Matthew R. Radcliff, Victoria Weeks, Ryan Fitzgibbons, Aries Keck",
            description:
              "A series of Landsat satellites have surveyed the Earth's surface since 1972. In that time, Landsat data have become a vital reference worldwide, used for understanding scientific issues related to land use and natural resources. However, some Landsat images are simply striking to look at - presenting spectacular views of mountains and valleys, forests and farms. To celebrate the 40th anniversary of Landsat, the US Geological Survey and NASA asked for your help in selecting the top five Earth As Art images.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20120723_Landsat_m11052_Earth_Art/GSFC_20120723_Landsat_m11052_Earth_Art~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20120723_Landsat_m11052_Earth_Art/GSFC_20120723_Landsat_m11052_Earth_Art.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00114/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth - South America First Frame of Earth Spin Movie",
            nasa_id: "PIA00114",
            date_created: "1996-01-29T14:41:19Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "This color image of the Earth was obtained by NASA's Galileo at about 6:10 a.m. Pacific Standard Time on Dec. 11, 1990, when the spacecraft was about 1.3 million miles from the planet during the first of two Earth flybys on its way to Jupiter.",
            secondary_creator: "NASA/JPL",
            description:
              "This color image of the Earth was obtained by NASA's Galileo at about 6:10 a.m. Pacific Standard Time on Dec. 11, 1990, when the spacecraft was about 1.3 million miles from the planet during the first of two Earth flybys on its way to Jupiter. The color composite used images taken through the red, green and violet filters. South America is near the center of the picture, and the white, sunlit continent of Antarctica is below. Picturesque weather fronts are visible in the South Atlantic, lower right. This is the first frame of the Galileo Earth spin movie, a 500- frame time-lapse motion picture showing a 25-hour period of Earth's rotation and atmospheric dynamics.  A movie is availalble at http://photojournal.jpl.nasa.gov/catalog/PIA00114",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00114/PIA00114~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA04652/collection.json",
        data: [
          {
            center: "JPL",
            title: "New Views of Earth Gravity Field from GRACE",
            nasa_id: "PIA04652",
            date_created: "2003-07-21T23:56:46Z",
            keywords: [
              "Earth",
              "Gravity Recovery and Climate Experiment GRACE",
            ],
            media_type: "image",
            description_508:
              "Gravity is the force that is responsible for the weight of an object and is determined by how the material that makes up the Earth is distributed throughout the Earth.",
            secondary_creator:
              "NASA/JPL/University of Texas Center for Space Research",
            description:
              "Gravity is the force that is responsible for the weight of an object and is determined by how the material that makes up the Earth is distributed throughout the Earth.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA04652/PIA04652~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/GSFC_20170419_EarthFleet_m12586_2017/collection.json",
        data: [
          {
            album: ["Earth Observing Fleet"],
            description:
              "No planet is better studied than the one we actually live on. NASA's fleet of 26 Earth science spacecraft, supported by aircraft, ships and ground observations, measure aspects of the environment that touch the lives of every person around the world. They study everything from the air we breathe, to rain and snow that provide water for agriculture and communities, to natural disasters such as droughts and floods, to the oceans, which cover 70 percent of Earth’s surface and provide food for many people around the world. Satellites and instruments on the International Space Station circle the whole globe, seeing both where people live and those remote parts of deserts, mountains and the vast oceans that are difficult if not impossible to visit. With instruments in space, scientists can get data for the whole globe in detail that they can't get anywhere else. This visualization shows the NASA fleet in 2017, from low Earth orbit all the way out to the DSCOVR satellite taking in the million-mile view.",
            title: "NASA's Vantage Point to View Earth",
            location: "Goddard Space Flight Center",
            nasa_id: "GSFC_20170419_EarthFleet_m12586_2017",
            media_type: "video",
            keywords: [
              "Orbit",
              "Lagrange Points",
              "Earth Observing Fleet",
              "Earth",
              "Fleet",
            ],
            date_created: "2017-04-19T00:00:00Z",
            description_508:
              "NASA's fleet of Earth science satellites, along with Earth science instruments on the International Space Station, surveys the whole globe, even the most remote parts that are difficult if not impossible to visit. With instruments in space, scientists can get data for the whole globe in detail that they can't get anywhere else. This visualization shows the NASA fleet in 2017, from low Earth orbit all the way out to the DSCOVR satellite taking in the million-mile view.",
            secondary_creator: "Matthew R. Radcliff, Greg Shirah, Ernie Wright",
            center: "GSFC",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20170419_EarthFleet_m12586_2017/GSFC_20170419_EarthFleet_m12586_2017~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20170419_EarthFleet_m12586_2017/GSFC_20170419_EarthFleet_m12586_2017.vtt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA05560/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth on the Horizon",
            nasa_id: "PIA05560",
            date_created: "2004-03-13T02:15:17Z",
            keywords: ["Earth", "Mars Exploration Rover MER"],
            media_type: "image",
            description_508:
              "This is the first image ever taken of Earth from the surface of a planet beyond the Moon. It was taken by the Mars Exploration Rover Spirit one hour before sunrise on the 63rd martian day, or sol, of its mission.",
            secondary_creator: "NASA/JPL/Cornell",
            description:
              "This is the first image ever taken of Earth from the surface of a planet beyond the Moon. It was taken by the Mars Exploration Rover Spirit one hour before sunrise on the 63rd martian day, or sol, of its mission. Earth is the tiny white dot in the center. The image is a mosaic of images taken by the rover's navigation camera showing a broad view of the sky, and an image taken by the rover's panoramic camera of Earth. The contrast in the panoramic camera image was increased two times to make Earth easier to see.   http://photojournal.jpl.nasa.gov/catalog/PIA05560",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA05560/PIA05560~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA04531/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth and Moon as viewed from Mars",
            nasa_id: "PIA04531",
            date_created: "2003-05-22T18:21:11Z",
            keywords: ["Earth", "Mars Global Surveyor MGS"],
            media_type: "image",
            description_508:
              "This is the first image of Earth ever taken from another planet that actually shows our home as a planetary disk. Because Earth and the Moon are closer to the Sun than Mars, they exhibit phases, just as the Moon, Venus, & Mercury do when viewed from Earth",
            secondary_creator: "NASA/JPL/Malin Space Science Systems",
            description:
              "This is the first image of Earth ever taken from another planet that actually shows our home as a planetary disk. Because Earth and the Moon are closer to the Sun than Mars, they exhibit phases, just as the Moon, Venus, & Mercury do when viewed from Earth",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA04531/PIA04531~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA10120/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth Departure Movie",
            nasa_id: "PIA10120",
            date_created: "2005-08-02T18:00:48Z",
            keywords: ["Earth", "MESSENGER"],
            media_type: "image",
            description_508:
              "NASA Mercury-bound MESSENGER spacecraft captured several stunning images of Earth during a gravity assist swingby of its home planet on Aug. 2, 2005.",
            secondary_creator:
              "NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington",
            description:
              "NASA Mercury-bound MESSENGER spacecraft captured several stunning images of Earth during a gravity assist swingby of its home planet on Aug. 2, 2005.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA10120/PIA10120~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00728/collection.json",
        data: [
          {
            center: "JPL",
            title: "Global Images of Earth",
            nasa_id: "PIA00728",
            date_created: "1997-09-10T10:10:23Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "Global images of Earth from NASA Galileo orbiter on December 11, 1999. In each frame, the continent of Antarctica is visible at the bottom of the globe.",
            secondary_creator: "NASA/JPL/Johns Hopkins University",
            description:
              "Global images of Earth from NASA Galileo orbiter on December 11, 1999. In each frame, the continent of Antarctica is visible at the bottom of the globe.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00728/PIA00728~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/KSC-20230420-VP-CDC01-0001-Earth_Day_2023_Student_Briefing-3325938/collection.json",
        data: [
          {
            center: "KSC",
            date_created: "2023-04-20T00:00:00Z",
            description: "Earth Day 2023 - Student Briefing",
            description_508: "Earth Day 2023 - Student Briefing",
            keywords: [
              "Earth Day",
              "KSC",
              "Kennedy Space Center",
              "Conservation",
              "Environment",
              "Student Briefing",
              "Student",
            ],
            location: "KSCTV Auditorium",
            media_type: "video",
            nasa_id:
              "KSC-20230420-VP-CDC01-0001-Earth_Day_2023_Student_Briefing-3325938",
            photographer: "NASA/Chris Chamberland",
            title: "Earth Day 2023 - Student Briefing",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/KSC-20230420-VP-CDC01-0001-Earth_Day_2023_Student_Briefing-3325938/KSC-20230420-VP-CDC01-0001-Earth_Day_2023_Student_Briefing-3325938~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/KSC-20230420-VP-CDC01-0001-Earth_Day_2023_Student_Briefing-3325938/KSC-20230420-VP-CDC01-0001-Earth_Day_2023_Student_Briefing-3325938.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/audio/Ep216_Breath of the Earth/collection.json",
        data: [
          {
            description:
              "Gary Jordan (Host): Houston, we have a podcast! Welcome to the official podcast of the NASA Johnson Space Center, Episode 216, \"The Breath of the Earth.\" I'm Gary Jordan, and I'll be your host today. On this podcast, we bring in the experts, scientists, engineers, and astronauts all to let you know what's going on in the world of human spaceflight. The International Space Station allows us a great vantage point to look down at our home planet. A few episodes ago, we talked about the ECOSTRESS (ECOsystem Spaceborne Thermal Radiometer Experiment on Space Station) experiment with Dr. Kerry Cawse-Nicholson, which is looking at the temperature of the Earth in plants, urban areas, and more. She also brought up how data from other experiments feeds into our overall understanding of Earth science and mentioned one that is measuring carbon dioxide. Enter the Orbiting Carbon Observatory-3, or OCO-3, which is doing just that on a daily basis. It launched in 2019 and continues gathering data on atmospheric carbon from the OCO-2 experiment, that began in July 2014 in a polar orbit and is still there collecting data today. OCO-3 provides data from the space station's orbit, which is 52 degrees north and 52 degrees south latitudes. On this episode, we get the scoop on what this is and why it's important to help the planet from project scientist Dr. Annmarie Eldering at NASA's Jet Propulsion Laboratory in California. So, let's explore an experiment on the space station that's watching the Earth breathe. Enjoy!  [ Music]  Host: Annmarie, thanks so much for coming on Houston We Have A Podcast today.  Annmarie Eldering: Thank you. I'm very excited to share a little bit about what we're doing with OCO-3.  Host: Wonderful. First, I want to know a little bit more about you because OCO-3, you know, you have an interesting path to start working on this particular project, and you have a background in environmental engineering science -- I hope I'm saying it right -- which sounds very interesting. So please, let's, tell me about yourself. What led you to start working on OCO-3 like you are today?  Annmarie Eldering: Yeah. So, I came out to Los Angeles back in 1988, and it was a great time if you like smoggy, dirty, bad air. So that was what I studied in my Ph.D., was what is it that makes up the air pollution and reduces visibility in L.A.? And then we tried to understand how you could engineer a solution to it. So that was kind of my training and background, and thinking about the world we live in, the world around us, the environmental problems we have, and then how we might try to address them. And that's kind of fed into what I did once I got up to JPL. I went from working in a very local L.A. problem to starting to think about the global picture and global air pollution. And JPL was getting new instruments ready to go into space and study air pollution from space, and that was a great opportunity for me back in 1999.  Host: Hmm.  Annmarie Eldering: So, the first project I joined was called the Tropospheric Emissions Spectrometer. The name doesn't really give away much, but the point was to try to look through Earth's atmosphere and learn about the air pollution, but not just the total amount, but we actually were trying to differentiate air pollution near the surface from air pollution higher up, because it's the stuff near the solution that impacts the humans, so, you want to try to see that separately. And it was a brand-new measurement technique that went up on an EOS (Earth Observing System) mission, and we had a lot of success. And, well, challenges and success with that project. But I learned about doing science from space and working in a NASA team. And then an opportunity arrived back in 2010 to join Orbiting Carbon Observatory-2, and that built nicely on what I had done with TES, so that's the opportunity I had to get involved with the carbon crews, and everything unfolded from there.  Host: The carbon crews, that's a pretty cool name. What is OCO-2?  Annmarie Eldering: So OCO-2, Orbiting Carbon Observatory-2, is a follow-on to OCO. The original instrument was a spectrometer built to measure carbon dioxide, but it didn't launch successfully back in 2009. And so, OCO-2 was a rebuild of that instrument, so a spectrometer that they rebuilt, and then they set it up on its own satellite. So OCO-2's actually still out there today, flying over your head and measuring carbon dioxide in Earth's atmosphere from a satellite.  Host: Very interesting. And before we go into OCO-3, which is going to be our primary discussion here, I want to understand more about exactly what it's studying. Because to lead into what exactly the OCO-3 is doing, I think we need to better understand just carbon dioxide, what's happening in the Earth, why is this a field that we actually need to study? So, so let's start there. What is, what is it that OCO-3 is studying? What's happening on Earth?  Annmarie Eldering: Yeah, I mean, those are great, great questions. And OCO-2 and OCO-3 are, you know, sisters, we kind of, sister instruments using the same technique, measuring the same gases. And carbon dioxide, so a little bit about carbon dioxide: it's this molecule that's in our atmosphere, and it has a particular effect called, we call it the greenhouse gas effect, or it can trap heat and energy. You know what a greenhouse is, maybe you don't know what a greenhouse is, so a greenhouse is where you use glass, you put up a glass building, and sunlight can get in but heat, the longer wavelengths of light, don't get out very well. So even if the air outside the greenhouse is cold, the air inside could be quite warm because the glass is trapping, trapping energy. And so, carbon dioxide molecules do a similar thing. Energy can come into Earth through sunshine, but when it's trying to get back out as heat and longer wavelength radiation, carbon dioxide holds on to some of that. So, it's a little blanket for Earth. And that's kind of a good thing. If that carbon dioxide wasn't there acting as a blanket, we would be way colder, we would not be comfortable here. But if you think about the blanketing effect, you also don't want too much of the blanket on you. The more and more carbon dioxide that gets into our Earth's atmosphere, the more and more it's trapping heat, so it's one of the critical gases to the climate change and the warming of Earth. And in particular, what we want to understand is more about how our human emissions, how much do they stay in Earth's atmosphere, how much do they get taken out by plants that are growing, how much do they absorb in the ocean? Because just for a few little numbers, if we think about how much carbon dioxide humans put into the atmosphere by burning coal and oil and gas, about half of that stays in the atmosphere, typically, and about half of that has been taken out by the oceans and the plants each year. That's over the last decades; as we have measurements, that's what we've seen. But every year's a little bit different. There's these years where the plants and the ocean seem to take out 80% of the carbon dioxide we put in. And then there's other years where they only take out 20%, so it's really variable. And we want to know, how is this going to unfold, what's going to happen in 2050, in 2070? Can the ocean just take up more and more and more and more? Is there going to be some limit? What about the plants? As the plants get warm or it's getting drier, is that going to limit how much carbon dioxide they can take out? So OCO-2 and OCO-3 want to measure carbon dioxide around the whole globe, over oceans, over plants areas, over urban areas -- measure it everywhere and try to put together a more detailed picture of this uptake and release of carbon dioxide from plants and oceans and the atmospheric state. So that was kind of a long story, but that's why we care about carbon dioxide.  Host: Yeah, no, but that's, it's super-interesting. I think this is, what you just described is, you know, where is this carbon dioxide coming from? What is producing it? Where is it being absorbed? Is this the idea of, when I was reading about OCO-3 and what it's measuring, there's these things called carbon dioxide sources and sinks? Is that essentially what you're talking about?  Annmarie Eldering: Yes, it is. That's exactly what I was talking about.  Host: OK.  Annmarie Eldering: The sources and the sinks of carbon dioxide. And also, we use the phrase sometimes about how the Earth breathes because --  Host: Hmm.  Annmarie Eldering: -- when plants get going in the spring, especially you think, if you just imagine a picture of the Earth in your mind and you think the northern hemisphere, North America, Europe, Asia, we have a lot of land in the northern hemisphere. Much more so than down in the southern hemisphere. And when spring arrives in the northern hemisphere, and those plants start growing, you can really see carbon dioxide amounts go down because the plants take it all out of the atmosphere. Or not all, they take a bunch out of the atmosphere. And then when those plants die off in the fall and the winter, that's released back up into the atmosphere. So, you see these swings and sways each year because of plant activity, ups and downs in carbon dioxide concentrations. So that kind of looks like the Earth breathing each spring and fall. But on top of that, we have an overall increase from year to year because we keep putting more carbon dioxide in than the plants and ocean can take out.  Host: Aha.  Annmarie Eldering: And that sources and sinks is this idea of, is, you know, what are the trees and the plants of North America doing? What are they doing in Europe? What are doing in Asia? It's, not every tree and plant is the same, so we want to think about sources and sinks, or uptake and removal, in different regions of the world to understand what exactly they're doing and how they might change in the future.  Host: OK, wonderful. Now, in terms of sources, you mentioned some, some human-made, or I think the term is, I'm probably going to butcher it, but anthropogenic emissions; so you got some human-made ones, and then there might be some natural sources of carbon dioxide. What are those?  Annmarie Eldering: Yeah, so the human sources are the dominant sources, but we still have to think about, we can think about land and ocean as a source, particularly when you say, for example, in November, when the plants are, leaves are falling off and starting to decay, there's regions of the world where there's more carbon dioxide going out into the atmosphere than was being taken up so that acts as a net source. So, the natural system can be a source of carbon dioxide in certain periods. And other phenomena, like fires, wildfires are more and more in the news these days, and when you're thinking about carbon dioxide, they, in the net, they're putting carbon dioxide out of the plants that are burning and up into the atmosphere. So, they're a net source to the atmosphere.  Host: Interesting. I didn't realize that wildfires can be a natural source, interesting. OK, and then you said the sinks. And I think you already mentioned them, but the ones that I heard were plants, which can vary, and then the other one was oceans. How do they work as absorbing the carbon dioxide?  Annmarie Eldering: Yeah, oceans are really interesting because you, you know, I guess, for me, I'm not an oceanographer, I hadn't been thinking about these things, but you actually have very different wave action, there's different temperatures, there's parts of the ocean where the water tends to be rising up from below and coming towards the surface, and other parts of the ocean where water is kind of sinking on down. And so, depending on the temperatures of the water and the atmosphere around it, carbon dioxide can get out of the ocean and up into the atmosphere, just as it can also be taken and absorbed into the oceans. And then in regions where there's downwelling, that gets taken down into the deep ocean. So, they are exchanging carbon dioxide. They don't vary wildly, right, like the plants vary a lot from year to year, the ocean's much more of a kind of a steady interaction to the atmosphere.  Host: Hmm, interesting. Now, in terms of, what I'm trying to do is build the foundational knowledge to catapult us into discussing of OCO-3. Some of the things it's studying are these sources and sinks, all of these different areas. We're talking global here, right? When we're talking about plants and oceans and these sources of emissions from all these, you know, they're burning coal, and oil, and everything, this is, that's a lot of data. I think the other, some of the other stuff it's, oh, is absorbing is radiation from plants, and something called solar-induced fluorescence. Now, what is that?  Annmarie Eldering: Yeah, let me tell you about the solar-induced fluorescence, and then we can talk more about the sampling and stuff.  Host: OK.  Annmarie Eldering: So, the solar-induced fluorescence is something we hadn't planned the mission around, but scientists started understanding that this was something they could learn about from space, ‘round about 2009, 2010, in that time frame. A couple different scientists in different labs were coming to this insight around the same time. And what, what they realized was that when photosynthesis happens in plants and trees, there's a little bit of, like, the sunlight comes in, the plant does photosynthesis, it generates some heat while it's doing that, and it also releases some light at very particular wavelengths. And when you make a measurement like ours from space and you're measuring light, you try to model and understand that light in great detail, and those scientists realized there was a little bit of light in this spectrum that they couldn't make sense of unless they said, wow, when plants are doing photosynthesis, they send off this energy, and I'm picking it up in my detector. So, we see a little bit of light that gets emitted when plants do photosynthesis, and it's giving us some insight into how much plant activity is happening. So that's what we call solar-induced fluorescence. It's the kind of the technical name of the light that comes out of plants when they do photosynthesis. So, we, we map that out and can take a picture of what's happening. And you see these really interesting seasonal cycles of, as the plants get rolling, this solar-induced fluorescence gets larger and larger, the tropics are almost always showing a big signal because those plants always have plenty of light and water and warmth, so they're pretty active all the time, whereas something like Canada will have a brief period of the summer where you get a lot of fluorescence from plant activity, and then other times of the year it's much lower signal levels. But it's great because if we're thinking about this question of carbon dioxide uptake, plant activities, interactions, if you know about the photosynthesis through this SIF signal, it helps you put together more of that puzzle about the plants and their uptake of carbon dioxide.  Host: There's the connection. OK, perfect. Now, that's perfect, Annmarie, that sets the, I think a nice foundation for what's happening. Let's go to the Orbiting Carbon Observatory-3. Now, what is this facility that's onboard the International Space Station?  Annmarie Eldering: Yeah, so the Orbiting Carbon Observatory-3 on the space station was a great opportunity that presented itself because, as I mentioned, we built OCO-2 as a rebuild of a failed launch. When that work was proposed, we decided we should make two at once. It's much cheaper to build two things at once than it is to build one and then build another. Just in case something happened and the next time we launched it, we wanted to have this spare instrument available. So, when OCO-2 was safely up in space and started working, we realized the opportunity to repurpose that spare and make it into this OCO-3 payload. And the International Space Station, I'm sure a lot of your listeners have that tracking tool, and see that it's going overhead, and people love to see the astronauts being brought up, and all the human activity. But there's also this really exciting science happening on the outside of the space station, and specifically, there's this module, the Japanese exposed module experimental facility, or JEM-EF. And if you build a payload with a very specific interface, you can get it launched and attached and it can start doing science. So, I think there's about eight or nine spots up there where people have instruments being used to do science from the space station. And so that's, OCO-3 went up into space and got installed on that JEM-EF facility back in May 2019.  Host: OK. And so that's, it's nice perspective, right? What's nice about, so, it seems like you have a lot of instruments that are similar on the OCO-2, which is its own satellite. I think that one's in a polar orbit, right? And this one has the International Space Station orbit. What's nice about having these two perspectives?  Annmarie Eldering: Yeah, it's very typical, as you mentioned, that a lot of science instruments in space are launched into these polar orbiting orbits, where they go over your head at the same time every day. And so that gives them some consistency in the time of day, which helps with some of the data interpretation. But on the other hand, you're missing out on anything that's happening that changes over time of day. So being on the International Space Station gives us this really neat opportunity to make measurements at variable times a day. Sometimes the data we collect is at eight in the morning, sometimes it's noon, sometimes it's four in the afternoon. And when you're thinking about plants and activities that vary through the day, it's great to have that new kind of information. And the folks who are working particularly with the plant data have all started to make assessments and show us they actually do see differences in measurements that happen in the morning versus the afternoon, and starting to learn that, for example, if plants are doing photosynthesis but then they get really hot and start to get overheated in the afternoon, that photosynthesis sort of shuts down due to the overheating, and they can start to see some signals of that in the data we're collecting. But I got a little bit sidebarred. So yeah, being on the space station, number one, it lets you see things at different times of day. Number two, it's, ISS is huge, it is like the size of a football field, so when you're building an instrument to go onto the space station, if you're a little bit heavy it doesn't really matter, and that made it really easy for us to build our OCO-3 payload because we weren't too constrained by weight, and so we could go ahead and just do good engineering and get the thing built up. And then the third thing about our OCO-3 payload is we have this amazing pointing system that we have had to add on to be able to look at our validation sites and look at the glint spot on the ocean, and so on. OCO-2 does all its pointing by moving the whole satellite. We couldn't get the ISS operators to agree to that for us, so we had to put our pointing system on OCO-3, and that's turned out to just be a really valuable new mechanism to have on our instrument.  Host: Hmm. Well, what's, what’s a validation site?  Annmarie Eldering: So, if you're measuring carbon dioxide and you want to talk to the science world, it's really important than you can connect the data you collect to the recognized standard for carbon dioxide. Everybody thinking about carbon dioxide ties back to this one measurement and measurement technique. So, we want to do the same thing, and the way we do this is kind of, there's three or four steps to it. We have some sites on the ground where we've installed instruments that look up at the Sun and make a measurement a lot like the OCO-3 measurement, so measure the light spectrum and then interpret that to find out the amount of carbon dioxide. But once in a while, an airplane or a balloon is launched over those ground sites, and it measures carbon dioxide by drawing air into a collection cylinder, just like they do where the references are made at the NOAA (National Oceanic and Atmospheric Administration) sites. And so those ground sites are measured over by an aircraft, and we measure over the ground sites so we can tie everything together. So we've got a whole network of these validation sites known as the Total Carbon Column Observing Network, or TCCON.  Host: Makes the data reliable when you end up looking at it because you know you have all these checks and balances.  Annmarie Eldering: Yeah, and it helps the scientists use our remote sensing data along with the ground-based in situ measurements, so we start to be able to really exploit all the data together.  Host: Very cool. All right, now OCO-3, it's in space, right, so, it's orbiting pretty high up; now, what are some of the instruments on board that help you to measure the things that you want to measure?  Annmarie Eldering: Yeah, so, so I'll tell you a little bit about what's the guts of OCO-3. We've just been talking in generality. But how do you figure out how much carbon dioxide is there when you're flying around on the ISS? And the way we do that is we look at light. So, we have, sunlight gets, shines down on Earth, reflects off Earth, and we collect some in our instrument. And we've designed this with three particular bands of light to be measured. And one of those is at a wavelength that's kind of like the wavelength of light your eye sees, or visible light. And that one's important because if there's a cloud in the way, it's really obvious at those wavelengths of light, so we can tell that we saw a cloud and that data's not going to be good. And then the other two bands that we measure in are where carbon dioxide molecules absorb light. So every molecule in the world, because they're made up of atoms that are interacting, there's the physics result in there being a very specific and known way that each molecule interacts with light. So, we design to collect specifically where carbon dioxide molecules are interacting with the light, one of those where there's a lot of light absorption by the carbon dioxide, and one where there's kind of a moderate amount. And so, by looking at that light and seeing how it changes, we can find out how much the carbon dioxide was interacting with the light. And we do that with what's known as a spectrometer. So if you're familiar with a prism, where you can make a little rainbow by spreading out the light wavelengths --  Host: Yeah.  Annmarie Eldering: -- it's a similar idea over a very narrow band-pass of light, band-pass of light, and very finely resolved. So, we collect very detailed measurement of light in these three little bands, and that's basically what we need to use to extract insight into how much carbon dioxide there is.  Host: So is it, I guess, it's some of these spectrometers that allowed you to have the happy accident of measuring solar-induced fluorescence in the plants as well. You're measuring light wavelengths, it sounds like, and you're like, \"hey, look at that!\"  Annmarie Eldering: That's exactly it, right. And the one I mentioned that we worried about the clouds, and so we used that visible wavelength…  Host: Right.  Annmarie Eldering: …if you go to the very shortest wavelength of light, that's where these light emissions from the plants show up. So, it's actually in, in OCO-2, we thought those wavelengths were just so far at the edge of the detector we weren't going to do anything with them. And that's where the plant light showed up, yeah.  Host: Very cool. Now, it sounds like those are the key instruments, right? You got the spectrometers on OCO-3. I think you said there was a pointing system on board. What other cool technologies are on OCO-3?  Annmarie Eldering: Let's see. We've got a, well, cool to me, I don't know if you'll find these cool. But you know, one of the other things we have to do is [laughs] these light measurements are the heart of the data, so you've got to make sure you really understand how much light there is. So we actually have to have a little calibration system built in, and we, what we do is there's little lamps that we've brought up with us, and we take our instrument and point into the calibration system and look at that lamp light periodically. Like every few orbits we do that. And some lamps get turned on once a week, and some get turned on every couple of hours. But we have to get those light measurements as a way to keep the instrument calibration running, or well understood, throughout the whole time period. So yeah, the pointing system, the spectrometers with these really sensitive, high-speed detectors at the back end, calibration system, and then being on the space station we don't have to have a fancy way to down, beam down the data, but we actually just send it over Ethernet connection, and then the space station takes care of everything with getting our data down to the ground.  Host: I see. So that's pretty nice, right? That's one less thing you had to worry about. Awesome. And you thought I wouldn't find that interesting; that's spectacular. So that's cool, the calibration technology. Now, in terms of how they work, right, in terms of the operation of them, you got the space station flying over the Earth, what is it, 16 times a day, or something like that; when are you collecting, what's the sampling technique that you're using to gather the data? How are all of the instruments working?  Annmarie Eldering: Yeah, so the, so as I mentioned we need sunlight to do this measurement, so our ops (operations) team will only send up instructions for data collection to happen during those daylight hours. But the kind of concept of the measurement is that we have these detectors, and we use them so that we have a footprint -- we call a footprint is like one little measurement of data that's occurring over about two by three kilometers on the ground -- and with our detector we can get eight of those footprints at once, where once is a third of a second. So, we kind of think of it like with your camera. You open up the shutter for a third of a second, get light on your detector, close the shutter, and read out the data. So, we do that. Every third of a second, we're getting eight footprints on the ground. So for about 14 kilometer from side to side for those eight footprints; get that data, reset your shutter, get another one. So, there's a continual swipe of data 14 kilometers wide being collected any time the Sun is shining on the Earth's surface. And we do have two, two modes that we primarily use. One of those is just looking straight down, or called the nadir mode, which is what we do over land. And over the water, the water surface is not that bright at the wavelengths of light I'm talking about, so we have to think about, where's the Sun shining onto the water? And if you've ever hung out at a side of a lake during kind of a sunrise or sunset, you know that where the sun reflects off the water can be super bright even if areas away from that are dark. So, we don't look right at that glint spot, but we look pretty close to it where we get bright reflections off of the water's surface. So that's another reason that pointing system was so important. If you've got to go find that shinier spot on the water, you need to point over to it with the pointing system.  Host: Yeah, you got to get just that right angle because that, it seems like the angle is very important to your data collection.  Annmarie Eldering: Absolutely.  Host: Yeah, yeah. And in terms of the scope, right, space station covers a lot of the Earth; are you gathering data from as much of the Earth as possible? Are you focusing on select areas, and just gathering data on these select areas over time? What's the, what’s the scope of what you're covering?  Annmarie Eldering: Yeah, that, so it's a couple numbers that are good to know about the space station is basically the orbit that it flies in, you can't see, you can see everything from about London to Patagonia, or 52 degrees northern latitude to 52 degrees southern latitude. So, with OCO-3 we can't look up at the Arctic, we don't see any of Antarctica, but we do see all those latitudes 52 to 52. And we, we work pretty closely with OCO-2. And since OCO-2 is healthy and happy and getting global measurements on a regular daily basis, what we've decided to do with OCO-3 is we take that nadir and glint data for a lot of the day, but we weave in a whole bunch of other special measurements. So, let me take a little moment, and I'll explain this other thing we do --  Host: Yeah.  Annmarie Eldering: -- called a SAM, or a snapshot area map. So that cool pointing system lets us, for example, when we want to look at one of those validation sites, what we do is we, we can point the system, pointing system a little bit ahead of where we're flying and sweep over the validation site, and then repoint and sweep it again. And you basically repoint as you're flying by, and you can overlap about five or six stretches of data. You'll measure about 50, 60 kilometers, and then repoint and sweep that again, and so on. So, we can use the pointing system to get that overlapped validation data. And then our engineers also designed a mode where you use that same pointing capability, but your goal is to map out an area that's about 50 kilometers by 50 kilometers, and just get one footprint on each location. So you think about that 2-by-3-kilometer footprint, if you collect the swath of data and then get one next to it, and one next to that, you can basically map out an area. And so, we schedule, some days we don't schedule any because the interesting places aren't going to be visible. And other days we'll get 30 or 35 of these maps collected. And we've selected, we have a whole database of places we want to try to look at. Those include cities, volcanos, forests where there's special studies going on; if somebody's out in the, what we call out in the field, for example, there's been scientists flying airplanes over Los Angeles and California to study carbon dioxide, we'll coordinate with them and collect maps of data with where they are. So, we've been a fraction of our time with OCO-3 doing those special snapshot area maps over these different focus areas. Again, cities, volcanos, forests, validation sites. So that's kind of a something that OCO-2 wasn't able to do, and a really interesting new data set we're getting with OCO-3.  Host: Fantastic. Very, very cool technology. It seems like because you were working on OCO-2, and you came to JPL just before the, I think, 2000, right, you said 1999, so I wonder, you mentioned that OCO-3 was a happy result of building a spare for OCO-2 and realizing, hey, you know, maybe we can actually turn this into something that can, you know, collect additional data, and where better of a place than the International Space Station; I wonder if you were there for the genesis of that idea and working towards the process of putting it on the International Space Station. Were you a part of that?  Annmarie Eldering: Yeah, I was. I totally had the opportunity to be there from the beginning and --  Host: Awesome.  Annmarie Eldering: -- I remember working with, you know, we had a lot of great engineers at JPL, and I can remember the discussions of, you know, where the possible places we could use this spare instrument; what are the upsides and what are the downsides, what are we going to do? And coming to the conclusion that the space station was the best option we could see, and then doing the work to make that into a reality. It was, it's super fun. [laughs]  Host: [laughs] That's awesome! So, when you realized that you were going to go to the space station, there are a couple things you mentioned that you needed to add because it was going to go into the space station, right, you got this pointing capability and stuff like that. And I wonder what it took to say, all right, let's get it on the space station. All the work that needed to get it tested and verified and ready to go up on a SpaceX Dragon to go to the space station.  Annmarie Eldering: Wow, we could do a whole another hour just on that. But I mean, a couple of things that stand out in my mind from that work. One of those was kind of like, you know, understanding what the environment of the space station was going to be like. And there's that, some of things you think about when you're in space is your temperature and how you're going to control your temperature because you're in the Sun for part of the orbit, and then you're out of the Sun. And you can get super cold and warm very quickly with that change. But the space station and the JEM-EF actually provide a cooling fluid that we could run through our instrument systems. So, the thermal engineers had to do a lot of work to figure out, could we stay at a good stable temperature.  And temperature stability turns out to be really, really important for our instruments and our spectrometers because if the instrument warms up a little bit, the alignment can change a little bit, and then that's really not good for the spectrometer that we want to use. So, temperatures, planning out, and figuring out if we're going to be able to keep our temperature control was one thing, I remember a lot of discussions about. And then also, vibration. So, when you get launched up into space, that's like the hardest thing on your instrument is that launch process, right? Once you're attached to the space station, you're flying around up there, it's a pretty calm place. But you think about the process of being strapped to a rocket and launched off of Earth is a lot of vibration. And the OCO-2 instrument was launched on what's called an Atlas rocket that's been used for NASA for a very long time, and there was well understood what the vibrations were going to be. The move to going with SpaceX was a big benefit from a cost perspective, but it's not as gentle of a ride. So, if we were, had visuals rather than just an oral I would show you this picture of this insane-looking additional engineering stuff we had to do to dampen the vibrations during the launch. We have this whole little set of rails on the bottom of our instrument that were there just as part of a vibration isolation system, so we didn't shake and rock and roll too hard when we went up on a SpaceX rocket. And building that pointing system, you know, it sounds cool when it's in operation but you could imagine just to engineer something that can move as many times as we're going to make it move and that can also, you got to have cables inside of this pointing system, right, it's got to be powered, it's got to know where it is, so it's got cables that are wound inside. And so, designing it so that it could all be moving and move smoothly and function for a long time was a, it's a good engineering challenge for the team. So those are a few things I remember long discussions of. And of course, any time you build something for space, you do a lot of testing, and there's usually a couple of surprises that happen during testing. And it's expensive to get things in this cold, cold vacuum environment that you need to simulate space. So when we test our instruments we run that whole operation around the clock, 24 hours a day. So, it's a big pushup for the team to do that work and to be efficient in doing it and respond to any surprises quickly while they're doing these round-the-clock testing efforts.  Host: Fantastic. Annmarie, it sounds like there was a lot of, a lot of work that went into making this instrument a possibility, getting it ready to go up to the International Space Station. And you know, there was work specifically to get it ready for a launch on the Falcon 9. I wonder if you had an opportunity to go out to Florida and watch it head to space, and what that was like.  Annmarie Eldering: So, this, yeah, working with SpaceX, and then the Falcon 9 was, we were really excited to do that, and to be part of, part of one of their payloads going up. So we, I'm trying to remember….I can remember some of the pictures. Part of the engineering team went down with the payload and was at the facility to see it loaded up into the Dragon. So, you, so a Dragon, if you take, look at any of the pictures of the Dragon capsule, there's a couple of big, kind of I-beam rails, and then your payload basically has feet that grab on to those rails. So our team went down there with the payload in a truck -- I can remember the afternoon when we had the payload put up into this truck that was going to drive to Florida, all the team came out to see it happen, we were so excited to be at that stage. Some of the engineers went on down to Florida and saw it integrated up into the Dragon capsule. And then a lot of us went down to try to be there for the launch. And I'm sure you and your listeners in the space business know that launch is always a window, right? You think, OK, we're going to go on Tuesday, but then anything could happen. And so unfortunately, we had weather delays and other interruptions, and I wasn't able to see the launch in person.  Host: Oh, no.  Annmarie Eldering: We only, I think we had about four or five folks who did it. But the good thing was we, our crew and the team were so enthusiastic, we basically went down to a local bar one night to see the launch, and there was a delay, so we went back the next night, and still had a good crew of people show up and watched everything on TV. And NASA, the NASA show, and then as you know, when you work with SpaceX, they've just got cameras everywhere. So, it was super cool to see the launch itself, but then also see the camera images as the separation of the Dragon capsule from the launch vehicle, and you can even see our payload in the back of the Dragon up in space. So, there was a lot that we got to see even though we weren't physically there in Florida for the, the event.  Host: Still probably a good feeling though, especially that last view, where you can actually see your payload in space for the very first time. That had to be pretty exciting. Like, wow, there it is. It's in space.  Annmarie Eldering: Yeah. No, I, and I was getting all jazzed when the rocket went on up, and then the engineers around me were like, be quiet, be quiet, we're not there yet, we're not there yet. And so, they wouldn't celebrate till you saw the separation --  Host: Right.  Annmarie Eldering: -- and you could actually see the Dragon capsule floating on out. And then there was even more fun. Like, so, you know, you get launched, but then it takes some time to get synced up to the ISS. And I can also remember where I was when we went through the process where the Dragon capsule arrived to the space station. A robot arm attaches and holds on to the capsule. So that's exciting. And then I think it was a day later that the robot arm took our payload and pulled it out of the back of the capsule, handed it off to a second robot arm, and then that brought it around and actually attached us in the JEM-EF slot. And the engineers got the ISS folks to use one of the cameras on a robot arm and watch as we started testing that our pointing system was moving properly. So, there was a lot that happened up there that we were able to see happening, with all the camera and all the data feed down from the space station. So that was actually all, like, just amazing to, to see that happen.  Host: Wonderful. And then, from there, you got like, I'm assuming, you kick into gear, and it's like, OK, now it's time to start the data collection. So, we've talked about the facility itself on board, some of the instruments, what it's doing, and what it's capturing. Now let's go to the ground. When, when the instrument is doing all this stuff around the world, what is happening to send that data to you? Where, where is your team? Give us a perspective on what it's like to, to be a part of the OCO-3 team?  Annmarie Eldering: Yeah, so it's really exciting to work with OCO-3 and be involved with everything, from operations to data processing to the science data product. So, to go from where we need to be, we sit on the ground and say, hey, what are we going to measure this week? What's available? What's happening on the ISS? Our mission operations team are a group of experts who have a set of tools that let us plan out a week in advance. Each week we make a plan, review it for the science, and then they actually talk directly up to our payload. They go through the mission operations center and send a set of instructions on up to the payload. And those get executed and collect our data. So we get the data collection, and then every six hours through the ISS system data gets sent down to the ground, and our data operations team gets a pile of 1s and 0s, which is what the raw data looks like. And they use their tools and their data processing to turn that into light levels, and then eventually into the science data products we're interested in. And their challenge is to keep their data flowing through the pipes so that they can keep up with the continual flow of data collection that we have. And then finally we have a group of scientists who work on everything, the calibration of the instrument, the validation of that data, and then the science and the use of the data that we've collected. So we've got three groups of people who do their magic every week and every day and make it all happen and create the data products.  Host: [Laughs] That's right. And you've been doing that continuously, right? You got a lot of work been done since it launched in 2019. You have a lot of data. And you're already starting to put some of that out. One of the things that I found interesting was some data that was published on concentrations of carbon dioxide in the Los Angeles area. So, what was that all about?  Annmarie Eldering: Yeah. I mean, Los Angeles is great. We've got millions of people living there, emitting carbon dioxide like crazy, clear skies, mountains trapping the air. So, it's a great place to study. And what this first piece of work showed was that if you can make observations like ours from space and see the whole L.A. region, you definitely pick up extra carbon dioxide that's coming from the emissions. But it can look very different, and that's basically driven by the winds, primarily. So, we showed that if you account for the emissions and you accounted for the winds, you could, for the most part, explain what OCO-3's been observing in the basin. So that was a good check on the technique, and it also helps us know that to try to apply those techniques to other cities, we've got to have a pretty good estimate of emissions as well as winds to be able to interpret our data.  Host: Very good. And you're going to continue to collect the data. And there's a lot more to do. I wonder, you know, there's a lot of good information about how, the way you described as, how the Earth is breathing, right? And so, I wonder, wonder what we can expect down the road in terms of publishing some of the data so that maybe, maybe we have a better understanding of our planet and better understanding of how to help our planet. I think that's one of the best things that could probably come from this investigation. And I wonder what some of the plans are for the OCO-3 team.  Annmarie Eldering: Yeah, so the OCO-3 team is in a unique position because when you get on the ISS and the JEM-EF, you don't get to stay forever. A lot of people want to do experiments like our experiment, and so we actually had a commitment for three years. And it looks like, in about the three years and four months or so, we actually have to say goodbye. And we'll be collecting data as long as we can, but there is another instrument being built, and when they're ready to come up we get taken off of the space station. And the other surprising thing for many people is that we're not going to be able to bring that instrument home and look at it and take it apart, because the Dragon capsule can carry, I think the number is about 6,000 pounds up to the station, but it cannot bring that much home. So, we get put in a capsule, but we'll burn up in the atmosphere at the very end of our mission and turn into a bunch of dust. So, there's a real end to this thing.  Host: Yeah. [laughs] So that's good. But then, you know, we have to look forward to when the mission is over, you get a chance to sit down, you don't have to worry about all these teams with the data collection and the operations, right, you get to sit down and look at the data and find out maybe some new and interesting things about our planet.  Annmarie Eldering: Yeah. Yeah, no, and we've, we're already getting some insights, and we can see, just like you say, when we have more time to dig in, where we can go with this. And just to give you a couple of teasers, so we did that work in L.A., and now we're looking at a lot of other cities. And when you look at our data as well as other gases that are measured by other instruments, for example, nitrogen dioxide, we're really starting to be able to put together a detailed picture of emissions from city from the data set. And also, as I mentioned, the folks looking at plants are using the different time of day data, and using some data from our neighbors, like ECOSTRESS is on the ISS, there's a Japanese payload and some others looking at plant, type of plants. There's GEDI (Global Ecosystem Dynamics Investigation), which is looking at how much plant material there is. So, scientists are using all those different types of ways of measuring plants together to get more insight into their activity, what limits their carbon dioxide removal, how they respond to stress and drought, and things like that. So, a lot of interesting science coming down the road.  Host: Annmarie, I think that's the perfect place to end right there is a teaser for, you know, getting folks excited for what's to come as you're nearing, I guess, the end of the OCO-3 mission with just a little bit of time left. But Annmarie, this was a wonderful discussion. I learned so much. From the last time we talked, we had a brief conversation as part of the SpaceX Crew-2 broadcast when you came over to SpaceX headquarters and we got to chat just briefly. This was just fascinating to dive so much deeper. So, I really appreciate your time. Thanks for coming on today.  Annmarie Eldering: Yeah, and really appreciate the interest, and I'm glad we got to share some of the information about the science and the cool thing we're doing with NASA and OCO-3.  [ Music]  Host: Hey, thanks for sticking around! What a fascinating conversation with Dr. Annmarie Eldering today about the OCO-3. I definitely learned a lot, and I hope you did, too. Check out NASA.gov/ISS for the latest on all the experiments that are happening on board. Annmarie also mentioned a website called Spot the Station. She said there was an app that will literally text you whenever the space station is flying overhead so you can go outside, and you can see it. It'll tell you where it's flying in your local area. That's spotthestation.nasa.gov. We're one of many NASA podcasts across the entire agency. You can check us all out at NASA.gov/podcasts, and you can find our full collection of episodes there. We're on the NASA Johnson Space Center pages of Facebook, Twitter, and Instagram, and you can use the hashtag #AskNASA on your favorite platform to submit an idea for the show or maybe ask a question. Just make sure to mention it's for us at Houston, We Have A Podcast. This episode was recorded on August 26, 2021. Thanks to Alex Perryman, Pat Ryan, Norah Moran, Belinda Pulido, Rachel Barry, and Erin Anthony. And of course, thanks again to Dr. Annmarie Eldering for taking the time to come on the show. Give us a rating and feedback on whatever platform you're listening to us on and tell us what you think of our podcast. We'll be back next week!",
            title: "HWHAP Ep216 _Breath of the Earth",
            keywords: [
              "Houston",
              "podcast",
              "Johnson",
              "space",
              "center",
              "JSC",
              "international",
              "station",
              "ISS",
              "carbon dioxide",
              "OCO-3",
              "Annmarie Eldering",
            ],
            nasa_id: "Ep216_Breath of the Earth",
            date_created: "2021-10-08T00:00:00Z",
            media_type: "audio",
            description_508: "Full transcript in the description",
            center: "JSC",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/Introducing NASA’s NEW Earth System Observatory/collection.json",
        data: [
          {
            center: "HQ",
            title: "Introducing NASA’s NEW Earth System Observatory",
            nasa_id: "Introducing NASA’s NEW Earth System Observatory",
            media_type: "video",
            keywords: [
              "3-dimensional",
              "Satellites",
              "Critical Observation Missions",
              "NASAs New Earth System Observatory",
              "Observatory",
            ],
            date_created: "2021-06-02T00:00:00Z",
            description:
              "NASA is introducing the Earth System Observatory – an array of satellites, instruments and missions that are going to collect a series of critical observations. These observations will better inform us of how our planet is changing with greater precision on unimaginable scales – from entire continents down to individual trees.   Each mission in itself will deliver important environmental measurements.  Taken together, as a single Observatory, we will have a holistic, 3-dimensional understanding of our Earth’s systems – how they work together, how one change can influence another.     Learn more here:  https://www.nasa.gov/press-release/new-nasa-earth-system-observatory-to-help-address-mitigate-climate-change",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/Introducing NASA’s NEW Earth System Observatory/Introducing NASA’s NEW Earth System Observatory~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/Introducing NASA’s NEW Earth System Observatory/Introducing NASA’s NEW Earth System Observatory.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA04378/collection.json",
        data: [
          {
            center: "JPL",
            title: "Seasonal Changes in Earth Surface Albedo",
            nasa_id: "PIA04378",
            date_created: "2005-05-04T17:55:57Z",
            keywords: ["Earth", "Terra"],
            media_type: "image",
            description_508:
              "Seasonal changes in Earth surface albedo over a 5-year period are seen in these image summary maps from NASA Terra spacecraft.",
            secondary_creator: "NASA/GSFC/LaRC/JPL, MISR Team",
            description:
              "Seasonal changes in Earth surface albedo over a 5-year period are seen in these image summary maps from NASA Terra spacecraft.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA04378/PIA04378~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA14447/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth Triptych from NASA Juno Spacecraft",
            nasa_id: "PIA14447",
            date_created: "2013-10-09T23:00:12Z",
            keywords: ["Earth", "Juno"],
            media_type: "image",
            description_508:
              "This trio of NASA Junocam views of Earth was taken during Juno close flyby on October 9, 2013.",
            secondary_creator: "NASA/JPL-Caltech/MSSS",
            description:
              "This trio of NASA Junocam views of Earth was taken during Juno close flyby on October 9, 2013.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA14447/PIA14447~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA18427/collection.json",
        data: [
          {
            center: "JPL",
            title: "Juno Post-launch view of Earth and Moon",
            nasa_id: "PIA18427",
            date_created: "2011-08-06T16:45:40Z",
            keywords: ["Earth", "Juno"],
            media_type: "image",
            description_508:
              "This image of Earth at left and the moon at right was taken by NASA Juno spacecraft as part of a checkout of the probe instruments following launch.",
            secondary_creator: "NASA/JPL-Caltech/SwRI/MSSS",
            description:
              "This image of Earth at left and the moon at right was taken by NASA Juno spacecraft as part of a checkout of the probe instruments following launch.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA18427/PIA18427~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA02228/collection.json",
        data: [
          {
            center: "JPL",
            title: "Solar System Portrait - Earth",
            nasa_id: "PIA02228",
            date_created: "1999-12-10T01:00:29Z",
            keywords: ["Earth", "Voyager"],
            media_type: "image",
            description_508:
              "This image of the Earth is one of 60 frames taken by NASA Voyager 1 spacecraft on Feb. 14, 1990 from a distance of approximately 4 billion miles and about 32 degrees above the ecliptic plane.",
            secondary_creator: "NASA/JPL",
            description:
              "This image of the Earth is one of 60 frames taken by NASA Voyager 1 spacecraft on Feb. 14, 1990 from a distance of approximately 4 billion miles and about 32 degrees above the ecliptic plane.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA02228/PIA02228~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/Our Planet Our Home An Earth Day Perspective_S/collection.json",
        data: [
          {
            center: "HQ",
            title: "Our Planet, Our Home: An Earth Day Perspective",
            nasa_id: "Our Planet Our Home An Earth Day Perspective_S",
            media_type: "video",
            keywords: ["Earth Day", "NASA", "Our Future", "Planet", "Our Home"],
            date_created: "2021-04-22T00:00:00Z",
            description:
              "We are all connected to and by Earth --- whether it's the trees and plants that give us the oxygen we breathe, the snow-capped mountains that provide the water we drink, or the breathtaking geophysical forces that shape the land beneath our feet. NASA has over 20 satellites measuring the height of oceans and inland water, clouds and precipitation, carbon dioxide and much more. By understanding our changing world, we improve lives and safeguard our future.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/Our Planet Our Home An Earth Day Perspective_S/Our Planet Our Home An Earth Day Perspective_S~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/Our Planet Our Home An Earth Day Perspective_S/Our Planet Our Home An Earth Day Perspective_S.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/Our Planet Our Home An Earth Day Perspective/collection.json",
        data: [
          {
            center: "HQ",
            title: "Our Planet, Our Home: An Earth Day Perspective",
            nasa_id: "Our Planet Our Home An Earth Day Perspective",
            media_type: "video",
            keywords: [
              "Earth Day",
              "NASA",
              "Planet",
              "Home",
              "Our Future",
              "Our World",
            ],
            date_created: "2021-04-22T00:00:00Z",
            description:
              "We are all connected to and by Earth --- whether it's the trees and plants that give us the oxygen we breathe, the snow-capped mountains that provide the water we drink, or the breathtaking geophysical forces that shape the land beneath our feet. NASA has over 20 satellites measuring the height of oceans and inland water, clouds and precipitation, carbon dioxide and much more. By understanding our changing world, we improve lives and safeguard our future.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/Our Planet Our Home An Earth Day Perspective/Our Planet Our Home An Earth Day Perspective~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/Our Planet Our Home An Earth Day Perspective/Our Planet Our Home An Earth Day Perspective.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA17935/collection.json",
        data: [
          {
            center: "JPL",
            title: "Curiosity Mars Rover First Image of Earth and Earth Moon",
            nasa_id: "PIA17935",
            date_created: "2014-02-06T19:07:21Z",
            keywords: ["Earth", "Mars Science Laboratory MSL"],
            media_type: "image",
            description_508:
              "The two bodies in this portion of an evening-sky view by NASA Mars rover Curiosity are Earth and Earth moon. The rover Mast Camera Mastcam imaged them in the twilight sky of Curiosity 529th Martian day, or sol Jan. 31, 2014.",
            secondary_creator: "NASA/JPL-Caltech/MSSS/TAMU",
            description:
              "The two bodies in this portion of an evening-sky view by NASA Mars rover Curiosity are Earth and Earth moon. The rover Mast Camera Mastcam imaged them in the twilight sky of Curiosity 529th Martian day, or sol Jan. 31, 2014.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA17935/PIA17935~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/JPL-20221111-EARTHf-0001-Earth Water Budget Animation/collection.json",
        data: [
          {
            center: "JPL",
            date_created: "2022-12-09T00:00:00Z",
            description:
              "Earth’s 370 quintillion gallons of water can be found all over the planet in lakes, rivers, glaciers, oceans, and groundwater. However, only a tiny fraction of this water is usable by humans. Understanding Earth’s ‘water budget’ – where these different forms of water exist and how they move – is an important part of understanding our planet and planning for future water needs. NASA has a fleet of satellites to help us bring Earth’s water budget into focus, including upcoming missions like SWOT (Surface Water and Ocean Topography).  SWOT is scheduled to launch from Vandenberg Space Force Base in central California no earlier than December 2022.  SWOT is a collaboration between NASA and the French space agency Centre National d’Etudes Spatiales (CNES), with contributions from the Canadian Space Agency (CSA) and UK Space Agency.   To learn more about the mission, visit: https://swot.jpl.nasa.gov/  Credit:  NASA/JPL-Caltech",
            description_508:
              "Earth’s 370 quintillion gallons of water can be found all over the planet in lakes, rivers, glaciers, oceans, and groundwater. However, only a tiny fraction of this water is usable by humans. Understanding Earth’s ‘water budget’ – where these different forms of water exist and how they move – is an important part of understanding our planet and planning for future water needs. NASA has a fleet of satellites to help us bring Earth’s water budget into focus, including upcoming missions like SWOT (Surface Water and Ocean Topography).  SWOT is scheduled to launch from Vandenberg Space Force Base in central California no earlier than December 2022.  SWOT is a collaboration between NASA and the French space agency Centre National d’Etudes Spatiales (CNES), with contributions from the Canadian Space Agency (CSA) and UK Space Agency.   To learn more about the mission, visit: https://swot.jpl.nasa.gov/  Credit:  NASA/JPL-Caltech",
            keywords: [
              "NASA",
              "Jet Propulsion Laboratory",
              "JPL",
              "Suface Water and Ocean Topography mission",
              "SWOT",
              "France",
              "CNES",
              "water",
              "ocean",
              "freshwater",
              "lakes",
              "rivers",
              "Earth",
              "Earth science",
              "satellite",
              "Canadian Space Agency",
              "CSA",
              "French Space Agency",
              "UK",
              "United Kingdom Space Agency",
              "UK Space Agency",
              "spacecraft",
              "mission",
              "climate change",
              "Thales Alenia Space",
              "testing",
              "launch",
              "animations",
              "science",
              "data",
            ],
            media_type: "video",
            nasa_id: "JPL-20221111-EARTHf-0001-Earth Water Budget Animation",
            title: "Earth Water Budget Animation",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/JPL-20221111-EARTHf-0001-Earth Water Budget Animation/JPL-20221111-EARTHf-0001-Earth Water Budget Animation~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/JPL-20221111-EARTHf-0001-Earth Water Budget Animation/JPL-20221111-EARTHf-0001-Earth Water Budget Animation.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA18033/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth",
            nasa_id: "PIA18033",
            date_created: "2012-01-30T23:52:16Z",
            keywords: [
              "Earth",
              "Suomi National Polar-orbiting Partnership",
              "blue marble",
            ],
            media_type: "image",
            description_508:
              "Behold one of the more stunningly detailed images of the Earth yet created. This Blue Marble Earth montage, created from photographs taken by the VIIRS instrument on board the Suomi NPP satellite, shows many stunning details of our home planet.",
            secondary_creator: "NASA",
            description:
              "Behold one of the more detailed images of the Earth yet created. This Blue Marble Earth montage shown above -- created from photographs taken by the Visible/Infrared Imager Radiometer Suite (VIIRS) instrument on board the new Suomi NPP satellite -- shows many stunning details of our home planet. The Suomi NPP satellite was launched last October and renamed last week after Verner Suomi, commonly deemed the father of satellite meteorology. The composite was created from the data collected during four orbits of the robotic satellite taken earlier this month and digitally projected onto the globe. Many features of North America and the Western Hemisphere are particularly visible on a high resolution version of the image.  http://photojournal.jpl.nasa.gov/catalog/PIA18033",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA18033/PIA18033~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00116/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth - Antarctica Mosaic",
            nasa_id: "PIA00116",
            date_created: "1996-02-01T11:23:24Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "This color picture of the limb of the Earth, looking north past Antarctica, is a mosaic of 11 images taken during a ten-minute period near 5:45 p.m. PST Dec. 8, 1990, by NASA’s Galileo imaging system.",
            secondary_creator: "NASA/JPL",
            description:
              "This color picture of the limb of the Earth, looking north past Antarctica, is a mosaic of 11 images taken during a ten-minute period near 5:45 p.m. PST Dec. 8, 1990, by NASA’s Galileo imaging system.  http://photojournal.jpl.nasa.gov/catalog/PIA00116",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00116/PIA00116~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA04159/collection.json",
        data: [
          {
            center: "JPL",
            title: "Calibration Image of Earth by Mars Color Imager",
            nasa_id: "PIA04159",
            date_created: "2005-08-22T16:11:54Z",
            keywords: ["Earth", "Mars Reconnaissance Orbiter MRO"],
            media_type: "image",
            description_508:
              "Three days after the Mars Reconnaissance Orbiter Aug. 12, 2005, launch, the NASA spacecraft was pointed toward Earth and the Mars Color Imager camera was powered up to acquire a suite of color and ultraviolet images of Earth and the Moon.",
            secondary_creator: "NASA/JPL/Malin Space Science Systems",
            description:
              "Three days after the Mars Reconnaissance Orbiter Aug. 12, 2005, launch, the NASA spacecraft was pointed toward Earth and the Mars Color Imager camera was powered up to acquire a suite of color and ultraviolet images of Earth and the Moon.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA04159/PIA04159~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA04160/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "Calibration View of Earth and the Moon by Mars Color Imager",
            nasa_id: "PIA04160",
            date_created: "2005-08-22T16:12:54Z",
            keywords: ["Earth", "Mars Reconnaissance Orbiter MRO"],
            media_type: "image",
            description_508:
              "Three days after the Mars Reconnaissance Orbiter Aug. 12, 2005, launch, the spacecraft was pointed toward Earth and the Mars Color Imager camera was powered up to acquire a suite of images of Earth and the Moon.",
            secondary_creator: "NASA/JPL/Malin Space Science Systems",
            description:
              "Three days after the Mars Reconnaissance Orbiter Aug. 12, 2005, launch, the spacecraft was pointed toward Earth and the Mars Color Imager camera was powered up to acquire a suite of images of Earth and the Moon.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA04160/PIA04160~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00432/collection.json",
        data: [
          {
            center: "JPL",
            title: "Clementine Images of Earth and Moon",
            nasa_id: "PIA00432",
            date_created: "1999-06-12T20:47:39Z",
            keywords: [
              "Earth",
              "Deep Space Program Science Experiment DSPSE",
              "Clementine",
            ],
            media_type: "image",
            description_508:
              "During its flight and lunar orbit, NASA’s Clementine spacecraft returned images of the planet Earth and the Moon. ",
            secondary_creator: "NASA/JPL/USGS",
            description:
              "During its flight and lunar orbit, NASA’s Clementine spacecraft returned images of the planet Earth and the Moon. This collection of UVVIS camera Clementine images shows the Earth from the Moon and 3 images of the Earth.  The image on the left shows the Earth as seen across the lunar north pole; the large crater in the foreground is Plaskett. The Earth actually appeared about twice as far above the lunar horizon as shown. The top right image shows the Earth as viewed by the UVVIS camera while Clementine was in transit to the Moon; swirling white cloud patterns indicate storms. The two views of southeastern Africa were acquired by the UVVIS camera while Clementine was in low Earth orbit early in the mission.  http://photojournal.jpl.nasa.gov/catalog/PIA00432",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00432/PIA00432~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_3/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Sun-Earth Day 2009 Promos: Galileo",
            photographer: "Ryan Fitzgibbons, Chris Smith",
            location: "Goddard Space Flight Center",
            nasa_id: "GSFC_20090318_SED_m10409_Promo_3",
            media_type: "video",
            keywords: ["Sun", "Sun-Earth Interactions", "Earth", "Galileo"],
            date_created: "2009-03-18T00:00:00Z",
            description_508:
              "Third short promo for Sun-Earth Day 2009 featuring a modern Galileo pitching all of his greatest discoveries over the last 400 years.",
            secondary_creator: "Ryan Fitzgibbons, Chris Smith",
            description:
              "Third short promo for Sun-Earth Day 2009 featuring a modern Galileo pitching all of his greatest discoveries over the last 400 years.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_3/GSFC_20090318_SED_m10409_Promo_3~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_3/GSFC_20090318_SED_m10409_Promo_3.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_1/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Sun-Earth Day 2009 Promo 1",
            photographer: "Ryan Fitzgibbons, Chris Smith",
            location: "Goddard Space Flight Center",
            nasa_id: "GSFC_20090318_SED_m10409_Promo_1",
            media_type: "video",
            keywords: ["Sun", "Sun-Earth Interactions", "Education", "Earth"],
            date_created: "2009-03-18T00:00:00Z",
            description_508:
              "Short promo for Sun-Earth Day 2009 featuring scientists and students talking about the most fascinating things they've learned about our sun.",
            secondary_creator: "Ryan Fitzgibbons, Chris Smith,",
            description:
              "Short promo for Sun-Earth Day 2009 featuring scientists and students talking about the most fascinating things they've learned about our sun.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_1/GSFC_20090318_SED_m10409_Promo_1~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_1/GSFC_20090318_SED_m10409_Promo_1.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_2/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Sun-Earth Day 2009 Promo 2",
            photographer: "Ryan Fitzgibbons, Chris Smith",
            location: "Goddard Space Flight Center",
            nasa_id: "GSFC_20090318_SED_m10409_Promo_2",
            media_type: "video",
            keywords: ["Sun", "Sun-Earth Interactions", "Education", "Earth"],
            date_created: "2009-03-18T00:00:00Z",
            description_508:
              "Second short promo for Sun-Earth Day 2009 featuring more people talking about what they find interesting about the sun.",
            secondary_creator: "Ryan Fitzgibbons, Chris Smith",
            description:
              "Second short promo for Sun-Earth Day 2009 featuring more people talking about what they find interesting about the sun.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_2/GSFC_20090318_SED_m10409_Promo_2~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20090318_SED_m10409_Promo_2/GSFC_20090318_SED_m10409_Promo_2.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/art001e000095 FD1 Earth1/collection.json",
        data: [
          {
            center: "JSC",
            date_created: "2022-11-16T00:00:00Z",
            description:
              "This first high-resolution image, taken on the first day of the Artemis I mission, was captured by a camera on the tip of one of Orion’s solar arrays. The spacecraft was 57,000 miles from Earth when the image was captured, and continues to distance itself from planet Earth as it approaches the Moon and distant retrograde orbit.",
            description_508:
              "In the bottom right, Earth is approximately three fourths illuminated, with white clouds swirling over its blue oceans. Above, Orion has extended a solar array wing, attached to the European Service Module. Earth and the white and metallic grey Orion are surrounded by the darkness of space.",
            keywords: [
              "Artemis I Resource Reel",
              "Artemis",
              "Artemis I",
              "Orion",
              "Earth",
            ],
            media_type: "image",
            nasa_id: "art001e000095 FD1 Earth1",
            title: "Orion and Earth",
            album: ["Artemis_I"],
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/art001e000095 FD1 Earth1/art001e000095 FD1 Earth1~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/NHQ_2019_0626_Earth Views from the ISS/collection.json",
        data: [
          {
            center: "HQ",
            title: "Earth Views from the ISS",
            nasa_id: "NHQ_2019_0626_Earth Views from the ISS",
            media_type: "video",
            keywords: [
              "Earth Views",
              "EarthViews",
              "Earth From Space",
              "Earth from ISS",
              "Earth from International Space Station",
            ],
            date_created: "2019-06-26T00:00:00Z",
            description: "Earth Views from the ISS",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2019_0626_Earth Views from the ISS/NHQ_2019_0626_Earth Views from the ISS~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/NHQ_2019_0626_Earth Views from the ISS/NHQ_2019_0626_Earth Views from the ISS.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00127/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth - Northeast Africa and the Arabian Peninsula",
            nasa_id: "PIA00127",
            date_created: "1996-01-29T14:46:27Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "This image of northeast Africa and the Arabian Peninsula was taken from an altitude of about 500,000 kilometers 300,000 miles by NASA’s Galileo spacecraft on December 9, 1992, as it left Earth en route to Jupiter.",
            secondary_creator: "NASA/JPL",
            description:
              "This image of northeast Africa and the Arabian Peninsula was taken from an altitude of about 500,000 kilometers 300,000 miles by NASA’s Galileo spacecraft on December 9, 1992, as it left Earth en route to Jupiter.  http://photojournal.jpl.nasa.gov/catalog/PIA00127",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00127/PIA00127~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00226/collection.json",
        data: [
          {
            center: "JPL",
            title: "Global View of Earth in the Near-Infrared",
            nasa_id: "PIA00226",
            date_created: "1996-02-08T12:51:23Z",
            keywords: ["Earth", "Galileo"],
            media_type: "image",
            description_508:
              "This near-infrared photograph of the Earth was taken by the Galileo spacecraft at 6:07 a.m. PST on Dec. 11, 1990, at a range of about 1.32 million miles. South America is prominent near the center.",
            secondary_creator: "NASA/JPL",
            description:
              "This near-infrared photograph of the Earth was taken by the Galileo spacecraft at 6:07 a.m. PST on Dec. 11, 1990, at a range of about 1.32 million miles. South America is prominent near the center.  http://photojournal.jpl.nasa.gov/catalog/PIA00226",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00226/PIA00226~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA17748/collection.json",
        data: [
          {
            center: "JPL",
            title: "Juno Approach to the Earth-Moon System",
            nasa_id: "PIA17748",
            date_created: "2013-12-10T18:30:02Z",
            keywords: ["Earth", "Juno"],
            media_type: "image",
            description_508:
              "This frame from a movie was captured by a star tracker camera on NASA Jupiter-bound Juno spacecraft. It was taken over several days as Juno approached Earth for a close flyby that would send the spacecraft onward to the giant planet.",
            secondary_creator: "NASA/JPL-Caltech/DTU",
            description:
              "This frame from a movie was captured by a star tracker camera on NASA Jupiter-bound Juno spacecraft. It was taken over several days as Juno approached Earth for a close flyby that would send the spacecraft onward to the giant planet.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA17748/PIA17748~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA14949/collection.json",
        data: [
          {
            center: "JPL",
            title: "One Special Day in the Life of Planet Earth",
            nasa_id: "PIA14949",
            date_created: "2013-07-22T21:14:08Z",
            keywords: ["Earth", "Cassini-Huygens"],
            media_type: "image",
            description_508:
              "The cameras on NASA Cassini spacecraft captured this rare look at Earth and its moon from Saturn orbit on July 19, 2013.",
            secondary_creator: "NASA/JPL-Caltech/Space Science Institute",
            description:
              "The cameras on NASA Cassini spacecraft captured this rare look at Earth and its moon from Saturn orbit on July 19, 2013.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA14949/PIA14949~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00559/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "The Earth and Moon As Seen by 2001 Mars Odyssey Thermal Emission Imaging System",
            nasa_id: "PIA00559",
            date_created: "2001-05-01T14:18:48Z",
            keywords: ["Earth", "2001 Mars Odyssey"],
            media_type: "image",
            description_508:
              "NASA Mars Odyssey spacecraft took this portrait of the Earth and its companion Moon. It was taken at a distance of 3,563,735 kilometers more than 2 million miles on April 19, 2001 as the 2001 Mars Odyssey spacecraft left the Earth.",
            secondary_creator: "NASA/JPL/Arizona State University",
            description:
              "NASA Mars Odyssey spacecraft took this portrait of the Earth and its companion Moon. It was taken at a distance of 3,563,735 kilometers more than 2 million miles on April 19, 2001 as the 2001 Mars Odyssey spacecraft left the Earth.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00559/PIA00559~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA11066/collection.json",
        data: [
          {
            center: "JPL",
            title: "Oblique Shot of Earth",
            nasa_id: "PIA11066",
            date_created: "2008-09-05T14:23:13Z",
            keywords: ["Earth", "ISS EarthKAM"],
            media_type: "image",
            description_508:
              "This highly oblique image shot over northwestern part of the African continent captures the curvature of the Earth and shows its atmosphere as seen by NASA EarthKAM. You can see clouds and even the occasional thunderhead.",
            secondary_creator: "NASA/JPL/UCSD/JSC",
            description:
              "This highly oblique image shot over northwestern part of the African continent captures the curvature of the Earth and shows its atmosphere as seen by NASA EarthKAM. You can see clouds and even the occasional thunderhead.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA11066/PIA11066~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/ISS 4K Crew Earth Observations/collection.json",
        data: [
          {
            album: ["Crew-2_Science_Media_Telecon"],
            description: "ISS 4K Crew Earth Observations",
            title: "ISS 4K Crew Earth Observations",
            nasa_id: "ISS 4K Crew Earth Observations",
            date_created: "2017-02-26T00:00:00Z",
            media_type: "video",
            center: "JSC",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/ISS 4K Crew Earth Observations/ISS 4K Crew Earth Observations~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/ISS 4K Crew Earth Observations/ISS 4K Crew Earth Observations.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000726/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Cloudy Earth",
            keywords: ["Cloudy Earth"],
            location: "Greenbelt, MD",
            nasa_id: "GSFC_20171208_Archive_e000726",
            date_created: "2015-05-08T17:54:30Z",
            media_type: "image",
            description:
              'Decades of satellite observations and astronaut photographs show that clouds dominate space-based views of Earth. One study based on nearly a decade of satellite data estimated that about 67 percent of Earth’s surface is typically covered by clouds. This is especially the case over the oceans, where other research shows less than 10 percent of the sky is completely clear of clouds at any one time. Over land, 30 percent of skies are completely cloud free.  Earth’s cloudy nature is unmistakable in this global cloud fraction map, based on data collected by the Moderate Resolution Imaging Spectroradiometer (MODIS) on the Aqua satellite. While MODIS collects enough data to make a new global map of cloudiness every day, this version of the map shows an average of all of the satellite’s cloud observations between July 2002 and April 2015. Colors range from dark blue (no clouds) to light blue (some clouds) to white (frequent clouds).  Read more here: <a href="http://1.usa.gov/1P6lbMU" rel="nofollow">1.usa.gov/1P6lbMU</a>  Credit: <b><a href="http://www.earthobservatory.nasa.gov/" rel="nofollow"> NASA Earth Observatory</a></b>  <b><a href="http://www.nasa.gov/audience/formedia/features/MP_Photo_Guidelines.html" rel="nofollow">NASA image use policy.</a></b>  <b><a href="http://www.nasa.gov/centers/goddard/home/index.html" rel="nofollow">NASA Goddard Space Flight Center</a></b> enables NASA’s mission through four scientific endeavors: Earth Science, Heliophysics, Solar System Exploration, and Astrophysics. Goddard plays a leading role in NASA’s accomplishments by contributing compelling scientific knowledge to advance the Agency’s mission.  <b>Follow us on <a href="http://twitter.com/NASAGoddardPix" rel="nofollow">Twitter</a></b>  <b>Like us on <a href="http://www.facebook.com/pages/Greenbelt-MD/NASA-Goddard/395013845897?ref=tsd" rel="nofollow">Facebook</a></b>  <b>Find us on <a href="http://instagrid.me/nasagoddard/?vm=grid" rel="nofollow">Instagram</a></b>',
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000726/GSFC_20171208_Archive_e000726~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/9259919/collection.json",
        data: [
          {
            center: "MSFC",
            title: "Earth Science",
            keywords: ["Science", "Earth Studies", "GEOTAIL"],
            nasa_id: "9259919",
            date_created: "1992-07-18T00:00:00Z",
            media_type: "image",
            description:
              "Workers at Launch Complex 17 Pad A, Kennedy Space Center (KSC) encapsulate the Geomagnetic Tail (GEOTAIL) spacecraft (upper) and attached payload Assist Module-D upper stage (lower) in the protective payload fairing. GEOTAIL project was designed to study the effects of Earth's magnetic field. The solar wind draws the Earth's magnetic field into a long tail on the night side of the Earth and stores energy in the stretched field lines of the magnetotail. During active periods, the tail couples with the near-Earth magnetosphere, sometimes releasing energy stored in the tail and activating auroras in the polar ionosphere. GEOTAIL measures the flow of energy and its transformation in the magnetotail and will help clarify the mechanisms that control the imput, transport, storage, release, and conversion of mass, momentum, and energy in the magnetotail.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/9259919/9259919~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA14436/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "Zonally Averaged Carbon Dioxide Concentration from Earth Mid-Troposphere at Different Latitudes, 2002 to 2013",
            nasa_id: "PIA14436",
            date_created: "2013-05-22T19:23:25Z",
            keywords: ["Earth", "Aqua"],
            media_type: "image",
            description_508:
              "This plot shows the concentration of carbon dioxide in Earth mid-troposphere at various latitudes as measured by NASA Aqua satellite. The colored lines represent different latitude bands that circle Earth, called zones.",
            secondary_creator: "NASA/JPL-Caltech",
            description:
              "This plot shows the concentration of carbon dioxide in Earth mid-troposphere at various latitudes as measured by NASA Aqua satellite. The colored lines represent different latitude bands that circle Earth, called zones.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA14436/PIA14436~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/jsc2019m001191_Down to Earth - What Else is Out There/collection.json",
        data: [
          {
            center: "JSC",
            title: "Down to Earth - What Else is Out There?",
            nasa_id: "jsc2019m001191_Down to Earth - What Else is Out There",
            date_created: "2019-12-10T00:00:00Z",
            keywords: ["International Space Station", "Anne McClain"],
            media_type: "video",
            description:
              "One year ago today, NASA astronaut Anne McClain launched on her first spaceflight to the International Space Station. In this episode of “Down to Earth – What Else is Out There?” Anne recalls her first spacewalk and how it changed her perception of Earth. The shift in worldview is inspired by space philosopher Frank White. #SpaceStation20th",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/jsc2019m001191_Down to Earth - What Else is Out There/jsc2019m001191_Down to Earth - What Else is Out There~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/jsc2019m001191_Down to Earth - What Else is Out There/jsc2019m001191_Down to Earth - What Else is Out There.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00452/collection.json",
        data: [
          {
            center: "JPL",
            title: "Solar System Portrait - Earth as Pale Blue Dot",
            nasa_id: "PIA00452",
            date_created: "1996-09-12T17:34:52Z",
            keywords: ["Earth", "Voyager", "pale blue dot"],
            media_type: "image",
            description_508:
              "This narrow-angle color image of the Earth, dubbed Pale Blue Dot, is a part of the first ever portrait of the solar system taken by NASA’s Voyager 1.",
            secondary_creator: "NASA/JPL",
            description:
              "This narrow-angle color image of the Earth, dubbed Pale Blue Dot, is a part of the first ever 'portrait' of the solar system taken by NASA’s Voyager 1. The spacecraft acquired a total of 60 frames for a mosaic of the solar system from a distance of more than 4 billion miles from Earth and about 32 degrees above the ecliptic. From Voyager's great distance Earth is a mere point of light, less than the size of a picture element even in the narrow-angle camera. Earth was a crescent only 0.12 pixel in size. Coincidentally, Earth lies right in the center of one of the scattered light rays resulting from taking the image so close to the sun. This blown-up image of the Earth was taken through three color filters -- violet, blue and green -- and recombined to produce the color image. The background features in the image are artifacts resulting from the magnification.  http://photojournal.jpl.nasa.gov/catalog/PIA00452",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00452/PIA00452~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/Top-16-Earth-Images-of-2016_FB/collection.json",
        data: [
          {
            center: "JSC",
            title: "Top 16 Earth Images of 2016",
            nasa_id: "Top-16-Earth-Images-of-2016_FB",
            date_created: "2017-02-12T00:00:00Z",
            media_type: "video",
            description:
              "Astronauts on the International Space Station take pictures of Earth out their windows nearly every day; over a year that adds up to thousands of photos.  The people at the Earth Science and Remote Sensing Unit at NASA’s Johnson Space Center in Houston pored through this year’s crop to pick their top 16 photos of Earth for 2016—enjoy!  Download the images: https://www.flickr.com/photos/nasa2explore/albums/72157674260752223   HD download link: https://archive.org/details/TheSpaceProgram  _______________________________________ FOLLOW THE SPACE STATION!   Twitter: https://twitter.com/Space_Station Facebook: https://www.facebook.com/ISS Instagram: https://instagram.com/iss/",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/Top-16-Earth-Images-of-2016_FB/Top-16-Earth-Images-of-2016_FB~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/Top-16-Earth-Images-of-2016_FB/Top-16-Earth-Images-of-2016_FB.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA21260/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth and Its Moon, as Seen From Mars",
            keywords: ["Earth", "Mars Reconnaissance Orbiter MRO", "Moon"],
            nasa_id: "PIA21260",
            date_created: "2017-01-06T17:51:54Z",
            media_type: "image",
            description_508:
              "This composite image of Earth and its moon, as seen from Mars, combines the best Earth image with the best moon image from four sets of images acquired on Nov. 20, 2016, by NASA's Mars Reconnaissance Orbiter. Mars was about 127 million miles from Earth.",
            secondary_creator: "NASA/JPL-Caltech/Univ. of Arizona",
            description:
              "This composite image of Earth and its moon, as seen from Mars, combines the best Earth image with the best moon image from four sets of images acquired on Nov. 20, 2016, by the High Resolution Imaging Science Experiment (HiRISE) camera on NASA's Mars Reconnaissance Orbiter.  Each was separately processed prior to combining them so that the moon is bright enough to see. The moon is much darker than Earth and would barely be visible at the same brightness scale as Earth. The combined view retains the correct sizes and positions of the two bodies relative to each other.  HiRISE takes images in three wavelength bands: infrared, red, and blue-green. These are displayed here as red, green, and blue, respectively. This is similar to Landsat images in which vegetation appears red. The reddish feature in the middle of the Earth image is Australia. Southeast Asia appears as the reddish area (due to vegetation) near the top; Antarctica is the bright blob at bottom-left. Other bright areas are clouds.  These images were acquired for calibration of HiRISE data, since the spectral reflectance of the Moon's near side is very well known. When the component images were taken, Mars was about 127 million miles (205 million kilometers) from Earth.  http://photojournal.jpl.nasa.gov/catalog/PIA21260",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA21260/PIA21260~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/Apollo_11_Plaque_Comparison_720p/collection.json",
        data: [
          {
            description:
              "Neil Armstrong reads a commemorative plaque affixed to the Apollo 11 lunar module. The video compares existing footage with the partially restored video. The thumbnail image shows the new footage on the left and the old on the right.",
            title: "Apollo_11_Plaque_Comparison_720p",
            photographer: "NASA",
            location: "Earth's Moon",
            nasa_id: "Apollo_11_Plaque_Comparison_720p",
            media_type: "video",
            keywords: [
              "Neil Armstrong",
              "Apollo 11",
              "Earth's Moon",
              "Moon",
              "Lunar landing",
            ],
            date_created: "2017-08-03T00:00:00Z",
            description_508:
              "Neil Armstrong reads a commemorative plaque affixed to the Apollo 11 lunar module. The video compares existing footage with the partially restored video. The thumbnail image shows the new footage on the left and the old on the right.",
            center: "HQ",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/Apollo_11_Plaque_Comparison_720p/Apollo_11_Plaque_Comparison_720p~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/Apollo_11_Plaque_Comparison_720p/Apollo_11_Plaque_Comparison_720p.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/JPL-20170630-ASTRDSf-0001-How Do We Spot Near Earth Asteroids/collection.json",
        data: [
          {
            center: "JPL",
            title:
              "JPL-20170630-ASTRDSf-0001-How Do We Spot Near Earth Asteroids",
            keywords: [
              "asteroid",
              "asteroids",
              "near-Earth",
              "near Earth",
              "finding asteroids",
              "amateur",
            ],
            nasa_id:
              "JPL-20170630-ASTRDSf-0001-How Do We Spot Near Earth Asteroids",
            date_created: "2017-06-30T00:00:00Z",
            media_type: "video",
            description:
              "Animation illustrates how near-Earth asteroids are detected by professional astronomers with the help of amateur astronomers and how our knowledge of their path is refined to determine if they might be a threat to Earth.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/JPL-20170630-ASTRDSf-0001-How Do We Spot Near Earth Asteroids/JPL-20170630-ASTRDSf-0001-How Do We Spot Near Earth Asteroids~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/JPL-20170630-ASTRDSf-0001-How Do We Spot Near Earth Asteroids/JPL-20170630-ASTRDSf-0001-How Do We Spot Near Earth Asteroids.srt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/cloudy-earth_16810027983_o/collection.json",
        data: [
          {
            center: "GSFC",
            title: "Cloudy Earth",
            keywords: ["clouds", "earth", "MODIS"],
            nasa_id: "cloudy-earth_16810027983_o",
            date_created: "2015-05-08T00:00:00Z",
            media_type: "image",
            description:
              "Decades of satellite observations and astronaut photographs show that clouds dominate space-based views of Earth. One study based on nearly a decade of satellite data estimated that about 67 percent of Earth’s surface is typically covered by clouds. This is especially the case over the oceans, where other research shows less than 10 percent of the sky is completely clear of clouds at any one time. Over land, 30 percent of skies are completely cloud free.  Earth’s cloudy nature is unmistakable in this global cloud fraction map, based on data collected by the Moderate Resolution Imaging Spectroradiometer (MODIS) on the Aqua satellite. While MODIS collects enough data to make a new global map of cloudiness every day, this version of the map shows an average of all of the satellite’s cloud observations between July 2002 and April 2015. Colors range from dark blue (no clouds) to light blue (some clouds) to white (frequent clouds).",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/cloudy-earth_16810027983_o/cloudy-earth_16810027983_o~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA05547/collection.json",
        data: [
          {
            center: "JPL",
            title: "You are here: Earth as seen from Mars",
            nasa_id: "PIA05547",
            date_created: "2004-03-11T23:03:28Z",
            keywords: ["Earth", "Mars Exploration Rover MER"],
            media_type: "image",
            description_508:
              "This is the first image ever taken of Earth from the surface of a planet beyond the Moon. It was taken by the Mars Exploration Rover Spirit one hour before sunrise on the 63rd martian day, or sol, of its mission.",
            secondary_creator: "NASA/JPL/Cornell/Texas A&M",
            description:
              "This is the first image ever taken of Earth from the surface of a planet beyond the Moon. It was taken by the Mars Exploration Rover Spirit one hour before sunrise on the 63rd martian day, or sol, of its mission. The image is a mosaic of images taken by the rover's navigation camera showing a broad view of the sky, and an image taken by the rover's panoramic camera of Earth. The contrast in the panoramic camera image was increased two times to make Earth easier to see.  The inset shows a combination of four panoramic camera images zoomed in on Earth. The arrow points to Earth. Earth was too faint to be detected in images taken with the panoramic camera's color filters.   http://photojournal.jpl.nasa.gov/catalog/PIA05547",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA05547/PIA05547~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/7667283/collection.json",
        data: [
          {
            center: "MSFC",
            title: "Earth Science",
            keywords: ["Science", "Earth Studies", "LAGEOS I"],
            nasa_id: "7667283",
            date_created: "1976-01-01T00:00:00Z",
            media_type: "image",
            description:
              "The LAGEOS I (Laser Geodynamics Satellite) was developed and launched by the Marshall Space Flight Center on May 4, 1976 from Vandenberg Air Force Base, California . The two-foot diameter satellite orbited the Earth from pole to pole and measured the movements of the Earth's surface.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/7667283/7667283~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA02953/collection.json",
        data: [
          {
            center: "JPL",
            title: "Common Craters Earth and Eros",
            nasa_id: "PIA02953",
            date_created: "2000-08-05T21:07:33Z",
            keywords: ["Eros", "NEAR Shoemaker"],
            media_type: "image",
            description_508: "Common Craters Earth and Eros",
            secondary_creator: "NASA/JPL/JHUAPL",
            description: "Common Craters Earth and Eros",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA02953/PIA02953~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA13227/collection.json",
        data: [
          {
            center: "JPL",
            title: "The Earth from the Moon",
            keywords: ["Moon", "Lunar Reconnaissance Orbiter LRO"],
            nasa_id: "PIA13227",
            date_created: "2010-06-24T17:56:02Z",
            media_type: "image",
            description_508: "The Earth from the Moon",
            secondary_creator: "NASA/GSFC/Arizona State University",
            description: "The Earth from the Moon",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA13227/PIA13227~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA07228/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth as Seen from Mars",
            keywords: ["Mars", "Mars Exploration Rover MER"],
            nasa_id: "PIA07228",
            date_created: "2005-06-01T16:33:56Z",
            media_type: "image",
            description_508: "Earth as Seen from Mars",
            secondary_creator: "NASA/JPL/Cornell/Texas A&M",
            description: "Earth as Seen from Mars",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA07228/PIA07228~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA04909/collection.json",
        data: [
          {
            center: "JPL",
            title: "Radiation Environment at Mars and Earth",
            nasa_id: "PIA04909",
            date_created: "2003-12-08T17:52:07Z",
            keywords: ["Mars", "2001 Mars Odyssey"],
            media_type: "image",
            description_508: "Radiation Environment at Mars and Earth",
            secondary_creator: "NASA/JPL/Johnson Space Center",
            description: "Radiation Environment at Mars and Earth",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA04909/PIA04909~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA12170/collection.json",
        data: [
          {
            center: "JPL",
            title: "A NASA Space Sleuth Hunts the Trail of Earth Water",
            nasa_id: "PIA12170",
            date_created: "2009-08-13T16:13:59Z",
            keywords: ["Earth", "Aura"],
            media_type: "image",
            description_508:
              "This vertical profile view from the Tropospheric Emission Spectrometer TES instrument on NASA Aura satellite depicts the distribution of water vapor molecules over Earth tropics across one transect of the satellite orbit on January 6, 2006.",
            secondary_creator: "NASA/JPL-Caltech/Univ. of Colorado, Boulder",
            description:
              "This vertical profile view from the Tropospheric Emission Spectrometer TES instrument on NASA Aura satellite depicts the distribution of water vapor molecules over Earth tropics across one transect of the satellite orbit on January 6, 2006.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA12170/PIA12170~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA13970/collection.json",
        data: [
          {
            center: "JPL",
            title: "NASA Spacecraft Images One of Earth Iceberg Incubators",
            nasa_id: "PIA13970",
            date_created: "2012-04-13T16:51:06Z",
            keywords: ["Earth", "Terra"],
            media_type: "image",
            description_508:
              "Acquired by NASA Terra spacecraft, this image shows the west coast of Greenland, one of Earth premiere incubators for icebergs -- large blocks of land ice that break off from glaciers or ice shelves and float in the ocean.",
            secondary_creator:
              "NASA/GSFC/METI/ERSDAC/JAROS, and U.S./Japan ASTER Science Team",
            description:
              "Acquired by NASA Terra spacecraft, this image shows the west coast of Greenland, one of Earth premiere incubators for icebergs -- large blocks of land ice that break off from glaciers or ice shelves and float in the ocean.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA13970/PIA13970~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA17744/collection.json",
        data: [
          {
            center: "JPL",
            title: "Juno Detects a Ham Radio HI from Earth",
            nasa_id: "PIA17744",
            date_created: "2013-12-10T18:30:01Z",
            keywords: ["Earth", "Juno"],
            media_type: "image",
            description_508:
              "During its close flyby of Earth, NASA Jupiter-bound Juno spacecraft listened for a coordinated, global transmission from amateur radio operators using its radio and plasma wave science instrument, known as Waves.",
            secondary_creator: "NASA/JPL-Caltech/University of Iowa",
            description:
              "During its close flyby of Earth, NASA Jupiter-bound Juno spacecraft listened for a coordinated, global transmission from amateur radio operators using its radio and plasma wave science instrument, known as Waves.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA17744/PIA17744~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA22653/collection.json",
        data: [
          {
            center: "JPL",
            title: "Mini Mission RainCube is Sent into Earth Orbit",
            keywords: ["CubeSat", "Earth"],
            nasa_id: "PIA22653",
            date_created: "2018-09-25T00:00:00Z",
            media_type: "image",
            description_508:
              "This image shows the size of NASA's tiny weather satellite, Raincube, in comparison to the International Space Station. RainCube was deployed into low-Earth orbit from the ISS in July, 2018.",
            secondary_creator: "NASA/JPL-Caltech",
            description:
              "RainCube was deployed into low-Earth orbit from the International Space Station in July, 2018, where it has been measuring rain and snowfall from space. The size of the tiny weather satellite can be seen in comparison to the Space Station. RainCube is a prototype for a possible fleet of small satellites that could one day help monitor severe storms, lead to improving the accuracy of weather forecasts and track climate change over time.  A closer look at these images reveals there are two CubeSats very close together -- RainCube is the bottom CubeSat closer to Earth, while the one above it is HaloSat, used to map the distribution of hot gas in the Milky Way.  https://photojournal.jpl.nasa.gov/catalog/PIA22653",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA22653/PIA22653~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/NHQ201804190012/collection.json",
        data: [
          {
            center: "HQ",
            title: "NASA Earth Day 2018",
            photographer: "NASA/Aubrey Gemignani",
            keywords: [
              "DC",
              "Earth",
              "Earth Day",
              "USA",
              "Union Station",
              "Washington",
            ],
            location: "Union Station",
            nasa_id: "NHQ201804190012",
            media_type: "image",
            date_created: "2018-04-19T00:00:00Z",
            description:
              "A visitor learns about Earth at one of NASA's exhibits at the Earth Day event on Thursday, April 19, 2018 at Union Station in Washington, D.C. Photo Credit: (NASA/Aubrey Gemignani)",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/NHQ201804190012/NHQ201804190012~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/201408200007HQ/collection.json",
        data: [
          {
            center: "HQ",
            title: "Ancient Earth, Alien Earths Event",
            photographer: "NASA/Aubrey Gemignani",
            keywords: [
              "Ancient Earth Alien Earths Event",
              "Dr. Dawn Sumner",
              "Early Earth",
              "Habitable Planets",
              "NASA",
              "NASA HQ",
              "NSF",
              "Panelist",
              "Panelists",
              "Professor of Geology at UC Davis",
              "Scientists",
              "Smithsonian Institution",
              "Webb Auditorium",
            ],
            location: "NASA HQ, 300 E St. SW",
            nasa_id: "201408200007HQ",
            media_type: "image",
            date_created: "2014-08-20T00:00:00Z",
            description:
              "Dr. Dawn Sumner, Professor of Geology, UC Davis, speaks on a panel at the “Ancient Earth, Alien Earths” Event at NASA Headquarters in Washington, DC Wednesday, August 20, 2014. The event was sponsored by NASA, the National Science Foundation (NSF), and the Smithsonian Institution and was moderated by Dr. David H. Grinspoon, Senior Scientist at the Planetary Science Institute. Six scientists discussed how research on early Earth could help guide our search for habitable planets orbiting other stars. Photo Credit: (NASA/Aubrey Gemignani)",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/201408200007HQ/201408200007HQ~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/201408200010HQ/collection.json",
        data: [
          {
            center: "HQ",
            title: "Ancient Earth, Alien Earths Event",
            photographer: "NASA/Aubrey Gemignani",
            keywords: [
              "Ancient Earth Alien Earths Event",
              "Audience",
              "Early Earth",
              "Habitable Planets",
              "NASA",
              "NASA HQ",
              "NSF",
              "Panelists",
              "Q&A",
              "Scientists",
              "Smithsonian Institution",
              "Webb Auditorium",
            ],
            location: "NASA HQ, 300 E St. SW",
            nasa_id: "201408200010HQ",
            media_type: "image",
            date_created: "2014-08-20T00:00:00Z",
            description:
              "An audience member asks the panelists a question at the “Ancient Earth, Alien Earths” Event at NASA Headquarters in Washington, DC Wednesday, August 20, 2014. The event was sponsored by NASA, the National Science Foundation (NSF), and the Smithsonian Institution and was moderated by Dr. David H. Grinspoon, Senior Scientist at the Planetary Science Institute. Six scientists discussed how research on early Earth could help guide our search for habitable planets orbiting other stars. Photo Credit: (NASA/Aubrey Gemignani)",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/201408200010HQ/201408200010HQ~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/201408200009HQ/collection.json",
        data: [
          {
            center: "HQ",
            title: "Ancient Earth, Alien Earths Event",
            photographer: "NASA/Aubrey Gemignani",
            keywords: [
              "Ancient Earth Alien Earths Event",
              "Dr. Timothy Lyons",
              "Early Earth",
              "Habitable Planets",
              "NASA",
              "NASA HQ",
              "NSF",
              "Panelist",
              "Panelists",
              "Professor of Biogeochemistry at UC Riverside",
              "Scientists",
              "Smithsonian Institution",
              "Webb Auditorium",
            ],
            location: "NASA HQ, 300 E St. SW",
            nasa_id: "201408200009HQ",
            media_type: "image",
            date_created: "2014-08-20T00:00:00Z",
            description:
              "Dr. Timothy Lyons, Professor of Biogeochemistry, UC Riverside, speaks on a panel at the “Ancient Earth, Alien Earths” Event at NASA Headquarters in Washington, DC Wednesday, August 20, 2014. The event was sponsored by NASA, the National Science Foundation (NSF), and the Smithsonian Institution and was moderated by Dr. David H. Grinspoon, Senior Scientist at the Planetary Science Institute. Six scientists discussed how research on early Earth could help guide our search for habitable planets orbiting other stars. Photo Credit: (NASA/Aubrey Gemignani)",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/201408200009HQ/201408200009HQ~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/201408200006HQ/collection.json",
        data: [
          {
            center: "HQ",
            title: "Ancient Earth, Alien Earths Event",
            photographer: "NASA/Aubrey Gemignani",
            keywords: [
              "Ancient Earth Alien Earths Event",
              "Dr. Phoebe Cohen",
              "Early Earth",
              "Habitable Planets",
              "NASA",
              "NASA HQ",
              "NSF",
              "Panelist",
              "Panelists",
              "Professor of Geosciences at Williams College",
              "Scientists",
              "Smithsonian Institution",
              "Webb Auditorium",
            ],
            location: "NASA HQ, 300 E St. SW",
            nasa_id: "201408200006HQ",
            media_type: "image",
            date_created: "2014-08-20T00:00:00Z",
            description:
              "Dr. Phoebe Cohen, Professor of Geosciences, Williams College, speaks on a panel at the “Ancient Earth, Alien Earths” Event at NASA Headquarters in Washington, DC Wednesday, August 20, 2014. The event was sponsored by NASA, the National Science Foundation (NSF), and the Smithsonian Institution and was moderated by Dr. David H. Grinspoon, Senior Scientist at the Planetary Science Institute. Six scientists discussed how research on early Earth could help guide our search for habitable planets orbiting other stars. Photo Credit: (NASA/Aubrey Gemignani)",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/201408200006HQ/201408200006HQ~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/201408200008HQ/collection.json",
        data: [
          {
            center: "HQ",
            title: "Ancient Earth, Alien Earths Event",
            photographer: "NASA/Aubrey Gemignani",
            keywords: [
              "Ancient Earth Alien Earths Event",
              "Dr. Christopher House",
              "Early Earth",
              "Habitable Planets",
              "NASA",
              "NASA HQ",
              "NSF",
              "Panelist",
              "Panelists",
              "Professor of Geosciences at Pennsylvania State University",
              "Scientists",
              "Smithsonian Institution",
              "Webb Auditorium",
            ],
            location: "NASA HQ, 300 E St. SW",
            nasa_id: "201408200008HQ",
            media_type: "image",
            date_created: "2014-08-20T00:00:00Z",
            description:
              "Dr. Christopher House, Professor of Geosciences, Pennsylvania State University, speaks on a panel at the “Ancient Earth, Alien Earths” Event at NASA Headquarters in Washington, DC Wednesday, August 20, 2014. The event was sponsored by NASA, the National Science Foundation (NSF), and the Smithsonian Institution and was moderated by Dr. David H. Grinspoon, Senior Scientist at the Planetary Science Institute. Six scientists discussed how research on early Earth could help guide our search for habitable planets orbiting other stars. Photo Credit: (NASA/Aubrey Gemignani)",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/201408200008HQ/201408200008HQ~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA13957/collection.json",
        data: [
          {
            center: "JPL",
            title: "Where on Earth...? MISR Mystery Image Quiz #27: Jordan",
            nasa_id: "PIA13957",
            date_created: "2012-02-08T23:38:52Z",
            keywords: ["Earth", "Terra"],
            media_type: "image",
            description_508:
              "Acquired by the Multi-angle Imaging SpectroRadiometer instrument aboard NASA Terra spacecraft, this image is from the MISR Where on Earth...? Mystery Quiz #27. The location is Jordan.",
            secondary_creator: "NASA/GSFC/LaRC/JPL, MISR Team",
            description:
              "Acquired by the Multi-angle Imaging SpectroRadiometer instrument aboard NASA Terra spacecraft, this image is from the MISR Where on Earth...? Mystery Quiz #27. The location is Jordan.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA13957/PIA13957~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA15016/collection.json",
        data: [
          {
            center: "JPL",
            title: "Where on Earth...? MISR Mystery Image Quiz #26: Costa Rica",
            nasa_id: "PIA15016",
            date_created: "2011-11-02T22:11:54Z",
            keywords: ["Earth", "Terra"],
            media_type: "image",
            description_508:
              "This image was acquired by the Multi-angle Imaging SpectroRadiometer instrument aboard NASA Terra spacecraft. This image is from the MISR Where on Earth...? Mystery Quiz #26.",
            secondary_creator: "NASA/GSFC/LaRC/JPL, MISR Team",
            description:
              "This image was acquired by the Multi-angle Imaging SpectroRadiometer instrument aboard NASA Terra spacecraft. This image is from the MISR Where on Earth...? Mystery Quiz #26.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA15016/PIA15016~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/GSFC_20170412_Lights_m12573_EarthAtNight/collection.json",
        data: [
          {
            album: ["Earth At Night"],
            description:
              "NASA scientists have just released the first new global map of Earth at night since 2012. This nighttime look at our home planet, dubbed the Black Marble, provides researchers with a unique perspective of human activities around the globe. By studying Earth at night, researchers can investigate how cities expand, monitor light intensity to estimate energy use and economic activity, and aid in disaster response.",
            title:
              "Lights of Human Activity Shine in NASA's Image of Earth at Night",
            location: "Goddard Space Flight Center",
            nasa_id: "GSFC_20170412_Lights_m12573_EarthAtNight",
            media_type: "video",
            keywords: ["Night Lights", "Night", "VIIRS", "Earth", "Suomi"],
            date_created: "2017-04-12T00:00:00Z",
            description_508:
              "NASA scientists have just released the first new global map of Earth at night since 2012. This nighttime look at our home planet, dubbed the Black Marble, provides researchers with a unique perspective of human activities around the globe. By studying Earth at night, researchers can investigate how cities expand, monitor light intensity to estimate energy use and economic activity, and aid in disaster response.",
            secondary_creator:
              "Kathryn Mersmann, Joshua Stevens, Mike Carlowicz, Kate Ramsayer, Miguel Roman",
            center: "GSFC",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20170412_Lights_m12573_EarthAtNight/GSFC_20170412_Lights_m12573_EarthAtNight~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20170412_Lights_m12573_EarthAtNight/GSFC_20170412_Lights_m12573_EarthAtNight.vtt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/9701574/collection.json",
        data: [
          {
            center: "MSFC",
            title: "Earth Science",
            keywords: ["Science", "Earth Studies", "GOES-1"],
            nasa_id: "9701574",
            date_created: "1994-03-08T00:00:00Z",
            media_type: "image",
            description:
              "Workers at the Astrotech processing facility in Titusville prepared for a news media showing of the Geostationary Operational Environmental Satellite-1 (GOES-1). GOES-1 was the first in a new generation of weather satellites deployed above Earth. It was the first 3-axis, body-stabilized meteorological satellite to be used by the National Oceanic Atmospheric Administration (NOAA) and NASA. These features allowed GOES-1 to continuously monitor the Earth, rather than viewing it just five percent of the time as was the case with spin-stabilized meteorological satellites. GOES-1 also has independent imaging and sounding instruments which can operate simultaneously yet independently. As a result, observations provided by each instrument will not be interrupted. The imager produces visual and infrared images of the Earth's surface, oceans, cloud cover and severe storm development, while the prime sounding products include vertical temperature and moisture profiles, and layer mean moisture.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/9701574/9701574~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/video/GSFC_20170515_Sunglints_m12600/collection.json",
        data: [
          {
            album: ["DSCOVR"],
            description:
              "Parked in space a million miles from Earth, the Earth Polychromatic Imaging Camera (EPIC) onboard the Deep Space Climate Observatory (DSCOVR) captures glimmers of reflected sunlight, evidence of ice crystals in the atmosphere.",
            title:
              "EPIC Observations of Ice in Earth's Atmosphere, from a Million Miles Away",
            location: "Goddard Space Flight Center",
            nasa_id: "GSFC_20170515_Sunglints_m12600",
            media_type: "video",
            keywords: [
              "Radiation Budget",
              "Galileo",
              "Earth",
              "DSCOVR",
              "EPIC",
            ],
            date_created: "2017-05-15T00:00:00Z",
            description_508:
              "Parked in space a million miles from Earth, the Earth Polychromatic Imaging Camera (EPIC) onboard the Deep Space Climate Observatory (DSCOVR) captures glimmers of reflected sunlight, evidence of ice crystals in the atmosphere.",
            secondary_creator:
              "Kathryn Mersmann, Kate Ramsayer, Alexander Marshak, Tamas Varnai, Alexander Kostinski",
            center: "GSFC",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20170515_Sunglints_m12600/GSFC_20170515_Sunglints_m12600~thumb.jpg",
            rel: "preview",
            render: "image",
          },
          {
            href: "https://images-assets.nasa.gov/video/GSFC_20170515_Sunglints_m12600/GSFC_20170515_Sunglints_m12600.vtt",
            rel: "captions",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA00450/collection.json",
        data: [
          {
            center: "JPL",
            title: "Solar System Portrait - View of the Sun, Earth and Venus",
            nasa_id: "PIA00450",
            date_created: "1996-09-13T10:01:39Z",
            keywords: ["Sun", "Voyager", "Earth", "Venus"],
            media_type: "image",
            description_508:
              "This color image of the sun, Earth and Venus was taken by the Voyager 1 spacecraft Feb. 14, 1990, when it was approximately 32 degrees above the plane of the ecliptic and at a slant-range distance of approximately 4 billion miles.",
            secondary_creator: "NASA/JPL",
            description:
              "This color image of the sun, Earth and Venus was taken by the Voyager 1 spacecraft Feb. 14, 1990, when it was approximately 32 degrees above the plane of the ecliptic and at a slant-range distance of approximately 4 billion miles.  It is the first -- and may be the only -- time that we will ever see our solar system from such a vantage point. The image is a portion of a wide-angle image containing the sun and the region of space where the Earth and Venus were at the time with two narrow-angle pictures centered on each planet. The wide-angle was taken with the camera's darkest filter (a methane absorption band), and the shortest possible exposure (5 thousandths of a second) to avoid saturating the camera's vidicon tube with scattered sunlight. The sun is not large in the sky as seen from Voyager's perspective at the edge of the solar system but is still eight million times brighter than the brightest star in Earth's sky, Sirius. The image of the sun you see is far larger than the actual dimension of the solar disk. The result of the brightness is a bright burned out image with multiple reflections from the optics in the camera. The \"rays\" around the sun are a diffraction pattern of the calibration lamp which is mounted in front of the wide angle lens. The two narrow-angle frames containing the images of the Earth and Venus have been digitally mosaiced into the wide-angle image at the appropriate scale. These images were taken through three color filters and recombined to produce a color image. The violet, green and blue filters were used; exposure times were, for the Earth image, 0.72, 0.48 and 0.72 seconds, and for the Venus frame, 0.36, 0.24 and 0.36, respectively. Although the planetary pictures were taken with the narrow-angle camera (1500 mm focal length) and were not pointed directly at the sun, they show the effects of the glare from the nearby sun, in the form of long linear streaks resulting from the scattering of sunlight off parts of the camera and its sun shade. From Voyager's great distance both Earth and Venus are mere points of light, less than the size of a picture element even in the narrow-angle camera. Earth was a crescent only 0.12 pixel in size. Coincidentally, Earth lies right in the center of one of the scattered light rays resulting from taking the image so close to the sun. Detailed analysis also suggests that Voyager detected the moon as well, but it is too faint to be seen without special processing. Venus was only 0.11 pixel in diameter. The faint colored structure in both planetary frames results from sunlight scattered in the optics.   http://photojournal.jpl.nasa.gov/catalog/PIA00450",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA00450/PIA00450~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/PIA04530/collection.json",
        data: [
          {
            center: "JPL",
            title: "Earth and Jupiter as viewed from Mars",
            nasa_id: "PIA04530",
            date_created: "2003-05-22T18:21:05Z",
            keywords: ["Earth", "Mars Global Surveyor MGS"],
            media_type: "image",
            description_508:
              "What does Earth look like when viewed from Mars? At 13:00 GMT on 8 May 2003, NASA Mars Global Surveyor MGS Mars Orbiter Camera MOC had an opportunity to find out.",
            secondary_creator: "NASA/JPL/Malin Space Science Systems",
            description:
              "What does Earth look like when viewed from Mars? At 13:00 GMT on 8 May 2003, NASA Mars Global Surveyor MGS Mars Orbiter Camera MOC had an opportunity to find out.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA04530/PIA04530~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/KSC-20190411-PH_ILW01_0001/collection.json",
        data: [
          {
            center: "KSC",
            title: "Earth Day Blog Post",
            photographer: "NASA/Isaac Watson",
            keywords: [
              "Earth Day",
              "KSC Earth Day",
              "KSC Environmental",
              "Earth",
            ],
            location: "KSC Visitor Complex",
            nasa_id: "KSC-20190411-PH_ILW01_0001",
            media_type: "image",
            date_created: "2019-04-11T00:00:00Z",
            description:
              "Kennedy Space Center kicked off its annual Earth Day celebrations with a sustainability expo at the center’s visitor complex in Florida on April 11, 2019. Approximately 40 exhibitors from across the nation assembled to provide information ranging from energy-saving solutions to wildlife and natural conservation. In addition, there were multiple butterfly releases held at the expo throughout the day.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/KSC-20190411-PH_ILW01_0001/KSC-20190411-PH_ILW01_0001~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/KSC-20190411-PH_ILW01_0075/collection.json",
        data: [
          {
            center: "KSC",
            title: "Earth Day Blog Post",
            photographer: "NASA/Isaac Watson",
            keywords: [
              "Earth Day",
              "KSC Earth Day",
              "KSC Environmental",
              "Earth",
            ],
            location: "KSC Visitor Complex",
            nasa_id: "KSC-20190411-PH_ILW01_0075",
            media_type: "image",
            date_created: "2019-04-11T00:00:00Z",
            description:
              "A newly released butterfly sits in a cluster of flowers at the Kennedy Space Center Visitor Complex. Kennedy kicked off its annual Earth Day celebrations with a sustainability expo at the center’s visitor complex in Florida on April 11, 2019, which included multiple butterfly releases throughout the day. Approximately 40 exhibitors from across the nation assembled to provide information ranging from energy-saving solutions to wildlife and natural conservation.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/KSC-20190411-PH_ILW01_0075/KSC-20190411-PH_ILW01_0075~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
      {
        href: "https://images-assets.nasa.gov/image/KSC-20190411-PH_ILW01_0055/collection.json",
        data: [
          {
            center: "KSC",
            title: "Earth Day Blog Post",
            photographer: "NASA/Isaac Watson",
            keywords: [
              "Earth Day",
              "KSC Earth Day",
              "KSC Environmental",
              "Earth",
            ],
            location: "KSC Visitor Complex",
            nasa_id: "KSC-20190411-PH_ILW01_0055",
            media_type: "image",
            date_created: "2019-04-11T00:00:00Z",
            description:
              "The KSC Garden Club was one of approximately 40 exhibitors from across the nation present at a sustainability expo held at the Kennedy Space Center Visitor Complex in Florida on April 11, 2019. The expo kicked off Kennedy’s annual Earth Day celebrations, and exhibitors in attendance provided information ranging from energy-saving solutions to wildlife and natural conservation. In addition, there were multiple butterfly releases throughout the day.",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/KSC-20190411-PH_ILW01_0055/KSC-20190411-PH_ILW01_0055~thumb.jpg",
            rel: "preview",
            render: "image",
          },
        ],
      },
    ],
    metadata: { total_hits: 40252 },
    links: [
      {
        rel: "next",
        prompt: "Next",
        href: "http://images-api.nasa.gov/search?q=earth&page=2",
      },
    ],
  },
};

module.exports = {
  APOD,
  EARTH
}
