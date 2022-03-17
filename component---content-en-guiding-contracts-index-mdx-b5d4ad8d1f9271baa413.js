(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[6006],{4227:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return m}});var a=n(9756),r=(n(7294),n(4983)),o=n(9832),i=["components"],s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}},p=l("Aligner"),c=l("Image"),u=l("Accordion"),h={_frontmatter:s},k=o.Z;function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(k,Object.assign({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"the-learning-curve",style:{position:"relative"}},"The Learning Curve",(0,r.kt)("a",{parentName:"h2",href:"#the-learning-curve","aria-label":"the learning curve permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)("p",null,"Any good spec starts with a picture:"),(0,r.kt)(p,{center:!0,mdxType:"Aligner"},(0,r.kt)(c,{alt:"Learning Curve Explainer",src:"/images/Learning-Curve-v2.png",mdxType:"Image"})),(0,r.kt)("h2",{id:"simple-summary",style:{position:"relative"}},"Simple Summary",(0,r.kt)("a",{parentName:"h2",href:"#simple-summary","aria-label":"simple summary permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)("p",null,"A generalised template for online educational courses."),(0,r.kt)("h2",{id:"abstract",style:{position:"relative"}},"Abstract",(0,r.kt)("a",{parentName:"h2",href:"#abstract","aria-label":"abstract permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)("p",null,"The following specifies a set of contracts capable of supporting free online educational environments for learners, while ensuring that educators are rewarded for the content they create. This standard allows for the creation of any kind of course and only expects educators to ensure learners can claim their fee back after some period of time."),(0,r.kt)("h2",{id:"motivation",style:{position:"relative"}},"Motivation",(0,r.kt)("a",{parentName:"h2",href:"#motivation","aria-label":"motivation permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)("p",null,"Student debt and underpaid teachers are two pivotal problems of our age. While an abundance of information exists online, especially in the open source world, we cannot simply make all resources free, as that ensures teachers become even more undervalued than they currently are. There must be some way of using programmable money to both erase student debt, while ensuring educators receive due recompense for the critical role they play in society."),(0,r.kt)("p",null,"These contracts present exactly one such solution. An epistemic community of learners who choose to mint (increasingly valuable) LEARN tokens at the end of their course, rather than just claim their original fee back, is the emergent result."),(0,r.kt)("h2",{id:"specification",style:{position:"relative"}},"Specification",(0,r.kt)("a",{parentName:"h2",href:"#specification","aria-label":"specification permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)("h3",{id:"kernel-factory",style:{position:"relative"}},"Kernel Factory",(0,r.kt)("a",{parentName:"h3",href:"#kernel-factory","aria-label":"kernel factory permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)("p",null,"This contract contains the logic for creating courses, registering learners, and tracking whose money has gone where and how much of the initial fee can be redeemed at any given time. It includes interfaces to the Learning Curve, which is the contract responsible for accepting DAI and minting LEARN (or vice versa); to a Yearn Vault; to the Yearn Registry (which stores a pointer to the latest vault contracts); and to an ERC20 implementation that includes the ",(0,r.kt)("inlineCode",{parentName:"p"},"permit()")," functionality necessary to ensure learners will only sign one transaction when registering for a course or redeeming their funds (rather than the approve-transact pattern we often see)."),(0,r.kt)("h4",{id:"methods",style:{position:"relative"}},"Methods",(0,r.kt)("a",{parentName:"h4",href:"#methods","aria-label":"methods permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"constructor")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"address _stable")," - the kind of token fees are denominated in;",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"address _learningCurve")," - the address of the contract containing the logic for minting & burning;",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"address _registry")," - the yearn registry of vaults, where fees are kept during study.")),(0,r.kt)("p",null,"The Factory is constructed to be aware of only these three items essential to its correct functioning.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"createCourse")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 _fee")," - the amount of DAI to be locked for the duration of study;",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 _checkpoints")," - the number of points at which learners can redeem part of their fee;",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 _checkpointBlockSpacing")," - checkpoints can be defined in blocks as exact time is not required;",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"string calldata _url"),' - a simple "metadata" field to link any course to its frontend, useful for validation ',"&"," security, as well as future frontend displays;",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"address _creator")," - the address to receive any yield generated when learners on this course choose not to mint LEARN.")),(0,r.kt)("p",null,"Anyone can create a course. There are no privileged roles here. The only expectation is that you define clearly when learners may redeem whatever it costs to take your course. You are encouraged to allow them to do so incrementally, using a few checkpoints, so that they can redeem portions of their fee as they go, as this likely makes their studies even more sustainable.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"batchDeposit")),(0,r.kt)("p",null,"A function which can be called by anyone to take the current funds in the Factory from fees and move them into a yearn vault.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"register")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"))),(0,r.kt)("p",null,"This method allows a learner to register for a course of their choice. It checks the fee associated with that course, accepts tokens amounting to that fee and registers the learner. The tokens are kept in the contract and assigned to the current batch. Once there are enough tokens in the batch to justify the gas costs of calling ",(0,r.kt)("inlineCode",{parentName:"p"},"batchDeposit()"),", anyone may do so and add the current batch to the yearn vault. Note that simply calling this route will require two transactions - one to approve this contract to spend your DAI, and another to actually spend it.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"permitAndRegister")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params:\n",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 nonce"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 expiry"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint8 v"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"bytes32 r"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"bytes32 s"),"  ")),(0,r.kt)("p",null,"This method uses te ",(0,r.kt)("inlineCode",{parentName:"p"},"permit()")," functionality associated with DAI to approve the KernelFactory contract to spend DAI on the caller's behalf and to execute the transaction in a single call. It does this by attaching the signature - which can be constructed using ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"r"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," - along with the nonce and expiry for that signature onto the call. Having this extra info enables us to then just call ",(0,r.kt)("inlineCode",{parentName:"p"},"register()")," and have it operate as expected.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"verify")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"address learner"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"),"  ")),(0,r.kt)("p",null,"All course are deployed with a given number of checkpoints allowing learners to receive a portion of their fees back at various stages in the course. This is a helper function that checks where a learner is in a course and is used by both ",(0,r.kt)("inlineCode",{parentName:"p"},"redeem()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mint()")," to figure out the proper amount to be redeemed. It is public, so anyone may check it at any time.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"_verify")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"address learner"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"),"  ")),(0,r.kt)("p",null,"The internal function that does the actual calculations and checks for the public function above. It uses ",(0,r.kt)("inlineCode",{parentName:"p"},"block.number")," because being accurate even to the second here is not required. We generally expect courses to run over periods of months, so working on block number approximations is more than adequate enough for our needs.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"redeem")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"))),(0,r.kt)("p",null,"If a learner is redeeming rather than minting, it means they are simply requesting their initial fee back (whether they have completed the course or not). In this case, the method checks what proportion of ",(0,r.kt)("inlineCode",{parentName:"p"},"fee")," (set when the course is deployed) must be returned and sends it back to the learner. Whatever yield they earned is allocated to the course creator, which they can choose to redeem at any point with another method described below."),(0,r.kt)("p",null,'This contract contains no sense of "completing" a course based on some kind of examination or assessment, as we do not feel this is the direction in which modern education ought to trend. This method simply checks the period elapsed since ',(0,r.kt)("inlineCode",{parentName:"p"},"blockRegistered"),". If this contains more blocks than ",(0,r.kt)("inlineCode",{parentName:"p"},"checkpoints * checkpointBlockSpacing"),", then the full ",(0,r.kt)("inlineCode",{parentName:"p"},"fee")," can be returned and the yield sent to the course creator.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mint")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"))),(0,r.kt)("p",null,"Handles learner minting new LEARN and checks via ",(0,r.kt)("inlineCode",{parentName:"p"},"verify()")," what proportion of the fee to send to the Learning Curve. If ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," is chosen, the yield earned is still assigned to the course creator to balance incentives for educators as best as possible. The total fee is returned directly to the learner in the form of LEARN tokens, and we feel that the shape and design of the Learning Curve is enough to incentivize many learners to choose this option. However, if they don't, this is not really a concern, as we see this as a long-term project and will be satisfied if the supply of LEARN grows very slowly.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"withdrawYieldRewards")),(0,r.kt)("p",null,"Transfers the amount of DAI that an address is eligible to withdraw. Addresses become eligible if they are set as the ",(0,r.kt)("inlineCode",{parentName:"p"},"creator")," a specific course and a learner on that course decides to redeem their fee rather than mint LEARN, which means that any yield the fee earned is returned to the course creator.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"determineEligibleAmount")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"),"  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"returns: ",(0,r.kt)("strong",{parentName:"p"},"uint256 eligibleShares"),", ",(0,r.kt)("strong",{parentName:"p"},"bool deployed"))),(0,r.kt)("p",null,"Fetches and updates the amount of funds that a learner is eligible for at this checkpoint in their course. It does this by looking at two things: ",(0,r.kt)("inlineCode",{parentName:"p"},"eligibleShares"),' that represent the share of collateral in the yearn vault which the learner can rightfully claim; and any "undeployed" DAI from their initial staked fees which has not yet been sent to a yearn vault.')),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getCurrentBatchTotal")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"returns: ",(0,r.kt)("strong",{parentName:"p"},"uint256"))),(0,r.kt)("p",null,"A helper get function which returns the total number of batches in our yearn vault.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getBlockRegistered")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"address learner"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"),"    ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"returns: ",(0,r.kt)("strong",{parentName:"p"},"uint256"))),(0,r.kt)("p",null,"A helper get function which returns the block a given learner registered in.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getCurrentBatchId")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"returns: ",(0,r.kt)("strong",{parentName:"p"},"uint256"))),(0,r.kt)("p",null,"A helper get function which returns the current ",(0,r.kt)("inlineCode",{parentName:"p"},"batchId"),".")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getNextCourseId")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"returns: ",(0,r.kt)("strong",{parentName:"p"},"uint256"))),(0,r.kt)("p",null,"A helper get function which returns the current ",(0,r.kt)("inlineCode",{parentName:"p"},"courseId"),".")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getLearnerCourseEligibleFunds")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"address learner"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"),"  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"returns: ",(0,r.kt)("strong",{parentName:"p"},"uint256"))),(0,r.kt)("p",null,"A helper get function which returns the amount of funds a learner is eligible to claim back from a given course, at any given time.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getLearnerCourseFundsRemaining")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"address learner"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"),"  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"returns: ",(0,r.kt)("strong",{parentName:"p"},"uint256"))),(0,r.kt)("p",null,"A helper get function which returns the amount of the initial fee a learner staked which remains in the course at any given time.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getCourseUrl")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 _courseId"),"  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"returns: ",(0,r.kt)("strong",{parentName:"p"},"string memory"))),(0,r.kt)("p",null,"A helper get function which returns the URL associated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"courseId")," stored in the contract, mostly for security and independent verification/auditing purposes.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getYieldRewards")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"address redeemer"),"  ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"returns: ",(0,r.kt)("strong",{parentName:"p"},"uint256"))),(0,r.kt)("p",null,"A helper get function which returns the current yieldRewards mapped to a given ",(0,r.kt)("inlineCode",{parentName:"p"},"creator")," address, should any educator wish to claim some of their earnings at any point.")),(0,r.kt)("h4",{id:"events",style:{position:"relative"}},"Events",(0,r.kt)("a",{parentName:"h4",href:"#events","aria-label":"events permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CourseCreated")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"uint256 indexed courseId,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 checkpoints,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 fee,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 checkpointBlockSpacing,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 url,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 creator  ")),(0,r.kt)("p",null,"Likely the most important event in the long run, especially if we want to build a catalogue of courses, the URLs that they exist at, and the creator addresses which are receiving any yield. Tracking these events allows us to build a coherent and clear front-end for discovering the various courses using this standard.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LearnerRegistered")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"uint256 indexed courseId,",(0,r.kt)("br",{parentName:"p"}),"\n","address learner  ")),(0,r.kt)("p",null,"Keep track of the addresses of learners and the courses they've signed up for.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FeeRedeemed")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"uint256 courseId,",(0,r.kt)("br",{parentName:"p"}),"\n","address learner,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 amount  ")),(0,r.kt)("p",null,"useful for understanding which learners have redeemed how much for each course. This allows for two important things: understanding which courses learners are ",(0,r.kt)("inlineCode",{parentName:"p"},"redeeming")," on rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"minting"),"; and tracking how many learners (and how much of their original fees) are inactive in either the Vault or the Factory.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LearnMintedFromCourse")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"uint256 courseId,",(0,r.kt)("br",{parentName:"p"}),"\n","address learner,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 stableConverted,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 learnMinted  ")),(0,r.kt)("p",null,"Tracked separately from ",(0,r.kt)("inlineCode",{parentName:"p"},"LearnMinted")," events in the Learning Curve so it's easy to see how much of the total supply of LEARN comes directly from learners going through the courses on offer.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BatchDeposited")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"uint256 batchId,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 batchAmount,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 batchYieldAmount  ")),(0,r.kt)("p",null,"Tracked to make it easy to see how much DAI is in each batch in the vault, and how many yDAI are associated with it for redemption or minting purposes.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CheckpointUpdated")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"uint256 courseId,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 checkpointReached,",(0,r.kt)("br",{parentName:"p"}),"\n","address learner  ")),(0,r.kt)("p",null,"Helpful in understanding where different learners are at different points in the course. Only emitted when a learner actually claims some amount of their intial fee back at a given checkpoint.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"YieldRewardRedeemed")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"address redeemer,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 YieldRewarded   ")),(0,r.kt)("p",null,"Helpful to keep track of how much yield has been claimed/sent back to the course creator at any given point.")),(0,r.kt)("h3",{id:"learning-curve",style:{position:"relative"}},"Learning Curve",(0,r.kt)("a",{parentName:"h3",href:"#learning-curve","aria-label":"learning curve permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)("p",null,"This contract contains the logic for minting and burning LEARN based on the collateral that is sent to it. Importantly, it is open to anyone, which is what allows secondary markets for LEARN to form easily. The more collateral locked, the less LEARN is minted, using an exponentially decaying function. This ensures that the price of LEARN - defined as the number in existence divided by the underlying collateral in this contract - increases linearly. Please see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1hjWFGPC_B9D7b6iI00DTVVLrqRFv3G5zFNiCBS7y_V8/edit?usp=sharing"},"this spreadsheet")," for the source of the graphical depiction below."),(0,r.kt)(p,{center:!0,mdxType:"Aligner"},(0,r.kt)(c,{alt:"Learn Curves",src:"/images/learn-curves.png",mdxType:"Image"})),(0,r.kt)("h4",{id:"methods-1",style:{position:"relative"}},"Methods",(0,r.kt)("a",{parentName:"h4",href:"#methods-1","aria-label":"methods 1 permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"initialise")),(0,r.kt)("p",null,"This is called only once, upon deployment, and is necessary for the maths to work. If we do not start at 1, then we end up with a DIV(0) error. The tokens are minted to the Learning Curve address itself, and so are unusable, as this seems most fair.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"permitAndMint")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params:\n",(0,r.kt)("strong",{parentName:"p"},"uint256 _amount"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 nonce"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint256 expiry"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"uint8 v"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"bytes32 r"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"bytes32 s"),"  ")),(0,r.kt)("p",null,"This method uses te ",(0,r.kt)("inlineCode",{parentName:"p"},"permit()")," functionality associated with DAI to approve the LearningCurve contract to spend DAI on the caller's behalf and to execute the transaction in a single call. It does this by attaching the signature - which can be constructed using ",(0,r.kt)("inlineCode",{parentName:"p"},"v"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"r"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," - along with the nonce and expiry for that signature onto the call. Having this extra info enables us to then just call ",(0,r.kt)("inlineCode",{parentName:"p"},"mint()")," and have it operate as expected.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mint")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 _wad")," - the amount of DAI collateral to be swapped for LEARN")),(0,r.kt)("p",null,"This method allows anyone to mint LEARN tokens dependent on the amount of DAI they send. It is calculated according to the exponential decay above, which can be modelled with a natural logarithm. We use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hifi-finance/prb-math/tree/main/contracts"},"this library")," to help us calculate it, as exponents on chain are challenging.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"mintForAddress")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"address learner"),"; ",(0,r.kt)("strong",{parentName:"p"},"uint256 _wad"))),(0,r.kt)("p",null,"This is the same as a normal mint, except that an address is passed in which the minted LEARN is sent to. This is necessary to allow for mints directly from a Course, where we want to learner to receive LEARN, not the Kernel Factory. It can also be used to mint LEARN to an address other than the one contributing collateral, which could - for instance - prove useful for donations.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"burn")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 _burnAmount")," - how much underlying DAI the burner wishes to receive back.")),(0,r.kt)("p",null,"This function takes in some amount of LEARN to be burned, calculates how much underlying DAI collateral this corresponds to using the inverse operation of the natural logarithm decay function for minting - i.e. the natural exponent ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," - burns the LEARN and returns the DAI to the sender.  ")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"e_calc")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 x")," - some number to be used in the calculation of exponents for ",(0,r.kt)("inlineCode",{parentName:"p"},"burn")," method calls.")),(0,r.kt)("p",null,"This function takes in some number ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", divides it by the global constant ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," and returns the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"e")," raised to the power of that number. This is used for the reverse operation of minting LEARN, here called ",(0,r.kt)("inlineCode",{parentName:"p"},"burn"),".  ")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"doLn")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 x"))),(0,r.kt)("p",null,"An internal, pure helper function that uses the PRBMathUD60x18 contract to return the natural logarithm of any number ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," we pass to it.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getPredictedBurn")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 _burnAmount")," - DAI to receive")),(0,r.kt)("p",null,"A helper function wich calculates the amount of underlying DAI collateral to return for some ",(0,r.kt)("inlineCode",{parentName:"p"},"_burnAmount")," of LEARN tokens passed into it.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"getMintableForReserveAmount")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"params: ",(0,r.kt)("strong",{parentName:"p"},"uint256 reserveAmount")," - DAI to lock")),(0,r.kt)("p",null,"A helper function to check if the learner has enough DAI to get the desired LEARN tokens and ensure a successful ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," transaction.")),(0,r.kt)("h4",{id:"events-1",style:{position:"relative"}},"Events",(0,r.kt)("a",{parentName:"h4",href:"#events-1","aria-label":"events 1 permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LearnMinted")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"address indexed learner,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 amountMinted,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 daiDeposited")),(0,r.kt)("p",null,"It is likely helpful to distinguish between ",(0,r.kt)("inlineCode",{parentName:"p"},"LearnMintedFromCourse")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LearnMinted")," by anyone interacting directly with the LearningCurve as secondary markets become more established, so that we can tell how much LEARN in existence comes from learning, and how much comes from speculation on the value of the resulting epistemic community.")),(0,r.kt)(u,{mdxType:"Accordion"},(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LearnBurned")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"address indexed learner,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 amountBurned,",(0,r.kt)("br",{parentName:"p"}),"\n","uint256 daiReturned")),(0,r.kt)("p",null,"The same reasoning applies as above: it is helpful to track LEARN created and destroyed by learners going through courses, and by other people interacting directly with these contracts. We have nothing against speculation, as such people take real risks and provide the necessary liquidity for more efficient markets to form.")),(0,r.kt)("h4",{id:"considerations",style:{position:"relative"}},"Considerations",(0,r.kt)("a",{parentName:"h4",href:"#considerations","aria-label":"considerations permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)("h5",{id:"k-constant",style:{position:"relative"}},'"k" constant',(0,r.kt)("a",{parentName:"h5",href:"#k-constant","aria-label":"k constant permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)("p",null,"Where does this magic constant come from? We were inspired by Uniswap's constant product formula and the simplicity it represents. While our setup is slightly different, we need some constant which defines the slope of the linearly increasing price function for LEARN. We do not think it possible, in principle, to model this with complete certainty. All we can do is ask increasingly precise questions about the kinds of outcome we might wish to see, especially in terms of how many LEARN will be minted by the course fee, if the learner chooses that option. "),(0,r.kt)("p",null,"We set ",(0,r.kt)("inlineCode",{parentName:"p"},"k = 10000")," because this means that 1M DAI must be locked as collateral before your course fee for the initial KERNEL course mints just 1 LEARN, an important psychological fact if nothing else."),(0,r.kt)("h2",{id:"rationale",style:{position:"relative"}},"Rationale",(0,r.kt)("a",{parentName:"h2",href:"#rationale","aria-label":"rationale permalink",className:"anchor-link after"},(0,r.kt)("span",{parentName:"a"},"¶"))),(0,r.kt)("p",null,"There are no special accounts or privileged roles in these contracts. There are no fees collected by a specific account. That is because we are very serious about building a ",(0,r.kt)("strong",{parentName:"p"},"general template for online education")," that cannot be co-opted and that both makes learning free, while also ensuring there are rewards available for educators."),(0,r.kt)("p",null,"We are sure that there are even better ways to achieve this, and so have tried to outline in detail all our assumptions in order that this may be the beginning of a fruitful conversation about how programmable money might solve incentive problems surrounding the transfer of knowledge."),(0,r.kt)("p",null,"The state of Ethereum will be around for a long, long time to come and so we are not here to get rich quickly, we are here to ",(0,r.kt)("a",{parentName:"p",href:"/build/games/infinite"},"play")," with this vastly expanded ",(0,r.kt)("a",{parentName:"p",href:"/learn/module-3/time"},"temporal")," ",(0,r.kt)("a",{parentName:"p",href:"/learn/module-4/the-garden"},"boundary"),". We have not written this for ourselves, but as a work of love and devotion to those yet to come."),(0,r.kt)("p",null,"Education is the ",(0,r.kt)("a",{parentName:"p",href:"/learn/module-7/"},"original gift")," and is especially interesting in gift-giving economies, because knowledge is given within a context that still demands effort and attention in order to be learned. Valuable knowledge may present itself for free, but it must be given attention and reflection in order to become personally meaningful. It is this paradox which makes educational gifts the seed around which a community crafting new value models can flourish. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"“A single flower blooms, and throughout the world it is spring”.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-guiding-contracts-index-mdx-b5d4ad8d1f9271baa413.js.map