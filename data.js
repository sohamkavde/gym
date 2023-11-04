const shoulderExercises = [
    {
      name: "Overhead Shoulder Press",
      description: "This exercise primarily targets the front (anterior) deltoids. You can do it with a barbell, dumbbells, or a machine.",
      steps: [
        "Stand with your feet shoulder-width apart.",
        "Hold a barbell or dumbbells at shoulder height with an overhand grip.",
        "Press the weight overhead by extending your arms and fully straightening them.",
        "Lower the weight back to shoulder height to complete one repetition."
      ]
    },
    {
      name: "Lateral Raises",
      description: "These target the side (lateral) deltoids. Hold dumbbells in each hand and raise your arms to the sides until they are parallel to the floor.",
      steps: [
        "Stand with your feet shoulder-width apart and hold a dumbbell in each hand by your sides.",
        "With a slight bend in your elbows, raise your arms to the sides until they are parallel to the floor.",
        "Lower the dumbbells back to your sides to complete one repetition."
      ]
    },
    {
      name: "Front Raises",
      description: "Focus on the front (anterior) deltoids. Raise dumbbells or a barbell in front of you to shoulder level.",
      steps: [
        "Stand with your feet shoulder-width apart and hold a dumbbell in each hand by your sides.",
        "With a slight bend in your elbows, raise the dumbbells in front of you until they are at shoulder level.",
        "Lower the dumbbells back to your sides to complete one repetition."
      ]
    },
    {
      name: "Bent-Over Lateral Raises",
      description: "This variation targets the rear (posterior) deltoids. Bend over at the hips and raise dumbbells to the sides.",
      steps: [
        "Stand with your feet shoulder-width apart and hold a dumbbell in each hand by your sides.",
        "Bend over at the hips, keeping your back straight and chest up.",
        "With a slight bend in your elbows, raise your arms to the sides until they are parallel to the floor.",
        "Lower the dumbbells back to your sides to complete one repetition."
      ]
    },
    {
      name: "Upright Rows",
      description: "This exercise works the traps and front deltoids. You can use a barbell or a cable machine.",
      steps: [
        "Stand with your feet shoulder-width apart.",
        "Hold a barbell with an overhand grip, hands closer than shoulder-width apart.",
        "Raise the barbell to chest height by lifting your elbows as high as possible.",
        "Lower the barbell back to your thighs to complete one repetition."
      ]
    },
    {
      name: "Shrugs",
      description: "Target the upper trapezius muscles by shrugging your shoulders with a barbell, dumbbells, or a shrug machine.",
      steps: [
        "Stand with your feet hip-width apart.",
        "Hold a barbell, dumbbells, or use a shrug machine with your arms fully extended and weights hanging by your sides.",
        "Elevate your shoulders as high as possible by shrugging.",
        "Lower your shoulders back to the starting position to complete one repetition."
      ]
    },
    {
      name: "Face Pulls",
      description: "Work the rear deltoids and upper traps by pulling a rope attachment toward your face on a cable machine.",
      steps: [
        "Set up a cable machine with a rope attachment at about head height.",
        "Stand facing the cable machine and hold the rope with both hands, arms extended.",
        "Pull the rope towards your face, separating your hands and squeezing your shoulder blades together.",
        "Return the rope to the starting position to complete one repetition."
      ]
    },
    {
      name: "Arnold Press",
      description: "A variation of the shoulder press that involves a twisting motion to target different parts of the shoulder.",
      steps: [
        "Sit on a bench with back support and hold a dumbbell in each hand at shoulder height with your palms facing you.",
        "Press the dumbbells overhead while simultaneously rotating your palms to face forward at the top of the movement.",
        "Lower the dumbbells and return to the starting position to complete one repetition."
      ]
    },
    {
      name: "Barbell High Pull",
      description: "This compound exercise engages the traps and deltoids. It's done by explosively lifting the barbell from the floor to shoulder height.",
      steps: [
        "Stand with your feet shoulder-width apart and a barbell on the floor in front of you.",
        "Bend at your hips and knees to grasp the barbell with an overhand grip, hands slightly wider than shoulder-width apart.",
        "Explosively pull the barbell up to shoulder height, leading with your elbows, and then lower it back to the floor to complete one repetition."
      ]
    },
    {
      name: "Push Press",
      description: "Incorporates leg drive to assist with lifting heavier weights overhead, targeting the shoulders and triceps.",
      steps: [
        "Stand with your feet shoulder-width apart and hold a barbell on your upper chest with your hands just outside shoulder-width.",
        "Bend your knees and perform a slight dip, then explosively drive the barbell overhead using your legs for assistance.",
        "Lower the barbell back to your upper chest to complete one repetition."
      ]
    },
    {
      name: "Machine Shoulder Press",
      description: "Utilize a shoulder press machine for a controlled and stable shoulder workout.",
      steps: [
        "Adjust the seat and settings on the machine according to your comfort and the machine's instructions.",
        "Sit down, grip the handles, and push the handles overhead until your arms are fully extended.",
        "Lower the handles back to the starting position to complete one repetition."
      ]
    },
    {
      name: "Seated Dumbbell Press",
      description: "Similar to the overhead press but done in a seated position to isolate the shoulders.",
      steps: [
        "Sit on a bench with back support and hold a dumbbell in each hand at shoulder height with your palms facing forward.",
        "Press the dumbbells overhead until your arms are fully extended, and then lower them back to shoulder height to complete one repetition."
      ]
    },
    {
      name: "Lying Dumbbell Y-Raises",
      description: "Lie face-down on an incline bench and raise dumbbells in a Y-shape to target the rear deltoids.",
      steps: [
        "Lie face-down on an incline bench set to about 45 degrees, holding a dumbbell in each hand, arms hanging straight down below you.",
        "Raise the dumbbells in a Y-shape by moving your arms outward and slightly diagonally, keeping a slight bend in your elbows.",
        "Lower the dumbbells back to the starting position to complete one repetition."
      ]
    },
    {
      name: "Cable Lateral Raises",
      description: "Perform lateral raises with a cable machine for constant tension on the deltoids.",
      steps: [
        "Attach a D-handle to a low cable pulley and set the cable to the lowest position.",
        "Stand sideways to the cable machine and hold the handle in your outside hand with your arm by your side.",
        "Raise your arm to the side until it's parallel to the floor and then lower it back to your side to complete one repetition.",
        "Repeat on the other side."
      ]
    },
    {
      name: "Handstand Push-Ups",
      description: "An advanced bodyweight exercise that places significant demand on the shoulders.",
      steps: [
        "Assume a handstand position with your feet against a wall for stability.",
        "Lower your body by bending your elbows until your head touches the ground or goes just below it.",
        "Push your body back up to the starting handstand position to complete one repetition."
      ]
    }
  ];

  const chestExercises = [
    {
      name: "Bench Press",
      description: "One of the most popular chest exercises, it targets the pectoralis major. You can use a barbell or dumbbells.",
      steps: [
        "Lie flat on a bench with your feet on the floor and your back, shoulders, and buttocks touching the bench.",
        "Hold a barbell or dumbbells with a wide grip and lower it to your chest.",
        "Push the weight back up to the starting position to complete one repetition."
      ],
      image: "https://example.com/bench-press.jpg"
    },
    {
      name: "Push-Ups",
      description: "A classic bodyweight exercise that engages the chest muscles. It can be done virtually anywhere.",
      steps: [
        "Start in a plank position with your hands slightly wider than shoulder-width apart.",
        "Lower your body by bending your elbows until your chest is just above the ground.",
        "Push your body back up to the plank position to complete one repetition."
      ],
      image: "https://example.com/push-ups.jpg"
    },
    {
      name: "Dumbbell Flyes",
      description: "This exercise isolates the pectoralis major and provides a deep stretch for the chest muscles.",
      steps: [
        "Lie on a bench with a dumbbell in each hand above your chest and your palms facing each other.",
        "Slightly bend your elbows and open your arms in a wide arc until you feel a stretch in your chest.",
        "Bring the dumbbells back together above your chest to complete one repetition."
      ],
      image: "https://example.com/dumbbell-flyes.jpg"
    },
    {
      name: "Incline Bench Press",
      description: "Similar to the flat bench press but targets the upper chest. Use a bench set at an incline.",
      steps: [
        "Lie on an inclined bench with your feet on the floor and your back, shoulders, and buttocks touching the bench.",
        "Hold a barbell or dumbbells with a wide grip and lower it to your upper chest.",
        "Push the weight back up to the starting position to complete one repetition."
      ],
      image: "https://example.com/incline-bench-press.jpg"
    },
    {
      name: "Chest Dips",
      description: "A bodyweight exercise that targets the chest and triceps. You'll need parallel bars or a dip station.",
      steps: [
        "Stand between parallel bars or use a dip station, supporting your weight on your extended arms.",
        "Lower your body by bending your elbows until your shoulders are below your elbows.",
        "Push your body back up to the starting position to complete one repetition."
      ],
      image: "https://example.com/chest-dips.jpg"
    },
    {
      name: "Cable Crossovers",
      description: "An isolation exercise that targets the chest muscles by crossing your hands over your body using a cable machine.",
      steps: [
        "Set up two cable pulleys to chest height, one on each side of you.",
        "Stand with one foot forward and grasp the handles with your arms slightly bent.",
        "Cross your hands over your body by bringing the handles toward each other.",
        "Return the handles to the starting position to complete one repetition."
      ],
      image: "https://example.com/cable-crossovers.jpg"
    },
    {
      name: "Decline Bench Press",
      description: "Targets the lower chest. Use a bench set at a decline angle for this exercise.",
      steps: [
        "Lie on a decline bench with your feet on the floor and your back, shoulders, and buttocks touching the bench.",
        "Hold a barbell or dumbbells with a wide grip and lower it to your lower chest.",
        "Push the weight back up to the starting position to complete one repetition."
      ],
      image: "https://example.com/decline-bench-press.jpg"
    },
    {
      name: "Machine Chest Press",
      description: "Utilize a chest press machine for a controlled chest workout.",
      steps: [
        "Adjust the seat and settings on the machine according to your comfort and the machine's instructions.",
        "Sit down, grip the handles, and push the handles forward until your arms are fully extended.",
        "Return the handles to the starting position to complete one repetition."
      ],
      image: "https://example.com/machine-chest-press.jpg"
    },
    {
      name: "Pullovers",
      description: "A chest exercise that also works the lats and triceps. It can be done with a dumbbell or a barbell.",
      steps: [
        "Lie on a bench with your upper back and shoulders on the bench and your hips below it.",
        "Hold a dumbbell or barbell with both hands above your chest and lower it backward behind your head.",
        "Bring the weight back to the starting position to complete one repetition."
      ],
      image: "https://example.com/pullovers.jpg"
    },
    {
      name: "Incline Dumbbell Press",
      description: "Similar to the incline bench press but done with dumbbells to engage each side independently.",
      steps: [
        "Lie on an inclined bench with your feet on the floor and your back, shoulders, and buttocks touching the bench.",
        "Hold a dumbbell in each hand with your palms facing forward and lower them to your upper chest.",
        "Push the dumbbells back up to the starting position to complete one repetition."
      ],
      image: "https://example.com/incline-dumbbell-press.jpg"
    }
  ];
  const backExercises = [
    {
      name: "Pull-Ups",
      description: "A bodyweight exercise that targets the back and biceps. Use a pull-up bar or similar equipment.",
      steps: [
        "Hang from a pull-up bar with your hands slightly wider than shoulder-width apart.",
        "Pull your body up until your chin is above the bar.",
        "Lower your body back to the hanging position to complete one repetition."
      ],
      image: "https://example.com/pull-ups.jpg"
    },
    {
      name: "Deadlift",
      description: "A compound exercise that works the lower back, hamstrings, and glutes. Use a barbell or dumbbells.",
      steps: [
        "Stand with your feet hip-width apart and a barbell in front of you or dumbbells at your sides.",
        "Bend at your hips and knees to grasp the barbell or dumbbells with an overhand grip.",
        "Lift the weight by extending your hips and knees to a fully upright position.",
        "Lower the weight back to the ground to complete one repetition."
      ],
      image: "https://example.com/deadlift.jpg"
    },
    {
      name: "Bent-Over Rows",
      description: "A compound exercise that targets the upper back. Use a barbell or dumbbells.",
      steps: [
        "Stand with your feet hip-width apart and hold a barbell with an overhand grip or dumbbells at your sides.",
        "Bend at your hips and knees to bring your torso forward while keeping your back straight.",
        "Pull the barbell or dumbbells to your lower ribcage by bending your elbows.",
        "Lower the weight back to the starting position to complete one repetition."
      ],
      image: "https://example.com/bent-over-rows.jpg"
    },
    {
      name: "Lat Pulldowns",
      description: "An exercise that targets the lats. Use a cable machine with a wide grip attachment.",
      steps: [
        "Sit at a lat pulldown machine with your knees under the pads and grip the bar with a wide grip.",
        "Pull the bar down to your chest while keeping your back straight and elbows pointed down.",
        "Release the bar back to the starting position to complete one repetition."
      ],
      image: "https://example.com/lat-pulldowns.jpg"
    },
    {
      name: "T-Bar Rows",
      description: "A compound exercise that targets the middle and upper back. Use a T-bar row machine or landmine attachment.",
      steps: [
        "Straddle a T-bar row machine or landmine attachment with your feet on either side.",
        "Bend at your hips and knees to grab the handles with both hands.",
        "Pull the handles toward your torso by bending your elbows.",
        "Lower the handles back to the starting position to complete one repetition."
      ],
      image: "https://example.com/t-bar-rows.jpg"
    },
    {
      name: "Single-Arm Dumbbell Rows",
      description: "An exercise that targets the lats and upper back. Use a bench for support.",
      steps: [
        "Place one knee and one hand on a bench for support, with the opposite leg extended behind you.",
        "Hold a dumbbell in the free hand and let it hang at arm's length.",
        "Pull the dumbbell to your hip by bending your elbow.",
        "Lower the dumbbell back to the starting position to complete one repetition."
      ],
      image: "https://example.com/single-arm-dumbbell-rows.jpg"
    },
    {
      name: "Seated Cable Rows",
      description: "An exercise that targets the middle back. Use a cable row machine with a V-bar attachment.",
      steps: [
        "Sit at a cable row machine and place your feet on the platform with your knees slightly bent.",
        "Hold the V-bar attachment with both hands, arms fully extended.",
        "Pull the attachment to your lower abdomen by bending your elbows.",
        "Release the attachment back to the starting position to complete one repetition."
      ],
      image: "https://example.com/seated-cable-rows.jpg"
    },
    {
      name: "Chin-Ups",
      description: "A bodyweight exercise that targets the biceps and upper back. Use a pull-up bar with a close underhand grip.",
      steps: [
        "Hang from a pull-up bar with your hands close together and palms facing you.",
        "Pull your body up until your chin is above the bar.",
        "Lower your body back to the hanging position to complete one repetition."
      ],
      image: "https://example.com/chin-ups.jpg"
    },
    {
      name: "Face Pulls",
      description: "Work the rear deltoids and upper traps with a cable machine and rope attachment.",
      steps: [
        "Set up a cable machine with a rope attachment at about head height.",
        "Stand facing the cable machine and hold the rope with both hands, arms extended.",
        "Pull the rope towards your face, separating your hands and squeezing your shoulder blades together.",
        "Return the rope to the starting position to complete one repetition."
      ],
      image: "https://example.com/face-pulls.jpg"
    },
    {
      name: "Wide-Grip Pull-Ups",
      description: "A variation of pull-ups with a wide grip for targeting the lats and upper back.",
      steps: [
        "Hang from a pull-up bar with your hands placed wider than shoulder-width apart.",
        "Pull your body up until your chin is above the bar.",
        "Lower your body back to the hanging position to complete one repetition."
      ],
      image: "https://example.com/wide-grip-pull-ups.jpg"
    },
    {
      name: "Bent-Over Dumbbell Rows",
      description: "An exercise targeting the upper back. Use a bench for support and dumbbells.",
      steps: [
        "Place one knee and one hand on a bench for support, with the opposite leg extended behind you.",
        "Hold a dumbbell in the free hand and let it hang at arm's length.",
        "Pull the dumbbell to your hip by bending your elbow.",
        "Lower the dumbbell back to the starting position to complete one repetition."
      ],
      image: "https://example.com/bent-over-dumbbell-rows.jpg"
    },
    {
      name: "Pulldown Machine Rows",
      description: "An exercise that targets the lats and upper back using a pulldown machine.",
      steps: [
        "Sit at a pulldown machine with your knees under the pads and grip the bar with a wide grip.",
        "Pull the bar down to your chest while keeping your back straight and elbows pointed down.",
        "Release the bar back to the starting position to complete one repetition."
      ],
      image: "https://example.com/pulldown-machine-rows.jpg"
    },
    {
      name: "Bent-Over T-Bar Rows",
      description: "A compound exercise targeting the upper back. Use a T-bar row machine or landmine attachment.",
      steps: [
        "Straddle a T-bar row machine or landmine attachment with your feet on either side.",
        "Bend at your hips and knees to grab the handles with both hands.",
        "Pull the handles toward your torso by bending your elbows.",
        "Lower the handles back to the starting position to complete one repetition."
      ],
      image: "https://example.com/bent-over-t-bar-rows.jpg"
    },
    {
      name: "Renegade Rows",
      description: "A challenging exercise that targets the upper back and core. Requires dumbbells.",
      steps: [
        "Start in a push-up position with a dumbbell in each hand, arms fully extended.",
        "Row one dumbbell to your hip while balancing on the other hand and feet.",
        "Return the dumbbell to the ground and perform a row with the other hand to complete one repetition."
      ],
      image: "https://example.com/renegade-rows.jpg"
    }
  ];
  const legExercises = [
    {
      name: "Front Squats",
      description: "A squat variation that primarily targets the quadriceps and core strength.",
      steps: [
        "Stand with your feet shoulder-width apart and the barbell in front of your shoulders, crossed over.",
        "Lower your body by bending your knees while keeping your back straight.",
        "Push through your heels to stand back up to the starting position to complete one repetition."
      ],
      image: "https://example.com/front-squats.jpg"
    },
    {
      name: "Romanian Deadlifts",
      description: "An exercise that works the hamstrings, glutes, and lower back.",
      steps: [
        "Stand with your feet hip-width apart and hold a barbell in front of your thighs with an overhand grip.",
        "Bend at your hips while keeping your back straight, lowering the barbell toward your shins.",
        "Return to the starting position by extending your hips to complete one repetition."
      ],
      image: "https://example.com/romanian-deadlifts.jpg"
    },
    {
      name: "Leg Press",
      description: "An exercise that targets the quadriceps, hamstrings, and glutes.",
      steps: [
        "Sit in the leg press machine with your feet on the platform shoulder-width apart.",
        "Push the weight up by extending your legs and then lower it back down to complete one repetition.",
      ],
      image: "https://example.com/leg-press.jpg"
    },
    {
      name: "Lunges",
      description: "A leg exercise that works the quadriceps, hamstrings, and glutes. You can perform lunges with or without weights.",
      steps: [
        "Stand with your feet together and hold dumbbells at your sides or a barbell on your upper back.",
        "Step one foot forward and lower your body until both knees are bent at a 90-degree angle.",
        "Push off the front foot and return to the starting position to complete one repetition."
      ],
      image: "https://example.com/lunges.jpg"
    },
    {
      name: "Box Jumps",
      description: "A plyometric exercise that builds leg power and explosiveness.",
      steps: [
        "Stand in front of a sturdy box or platform with your feet shoulder-width apart.",
        "Bend your knees and jump onto the box, landing with both feet on top.",
        "Step or jump back down to complete one repetition."
      ],
      image: "https://example.com/box-jumps.jpg"
    },
    {
      name: "Bulgarian Split Squats",
      description: "A single-leg exercise that targets the quadriceps, hamstrings, and glutes.",
      steps: [
        "Stand facing away from a bench with a dumbbell in each hand at your sides.",
        "Place one foot behind you on the bench and lower your back knee toward the ground.",
        "Push through the front heel to return to the starting position to complete one repetition."
      ],
      image: "https://example.com/bulgarian-split-squats.jpg"
    },
    {
      name: "Calf Raises",
      description: "An exercise that targets the calf muscles. Use a calf raise machine or a step.",
      steps: [
        "Stand with the balls of your feet on the edge of a step or the calf raise machine platform.",
        "Lower your heels below the step, then push up onto your toes to complete one repetition.",
      ],
      image: "https://example.com/calf-raises.jpg"
    },
    {
      name: "Step-Ups",
      description: "An exercise that targets the quadriceps and glutes. Use a bench or step.",
      steps: [
        "Stand in front of a bench or step with a dumbbell in each hand at your sides.",
        "Step onto the bench with one foot and push your body up to stand on top.",
        "Step back down with the same foot to complete one repetition."
      ],
      image: "https://example.com/step-ups.jpg"
    },
    {
      name: "Leg Extensions",
      description: "An isolation exercise that targets the quadriceps. Use a leg extension machine.",
      steps: [
        "Sit on the leg extension machine with your knees bent at 90 degrees.",
        "Extend your knees to lift the weight, then lower it back down to complete one repetition.",
      ],
      image: "https://example.com/leg-extensions.jpg"
    },
    {
      name: "Barbell Lunges",
      description: "A variation of lunges using a barbell to increase resistance.",
      steps: [
        "Stand with your feet hip-width apart and hold a barbell on your upper back.",
        "Step one foot forward and lower your body until both knees are bent at a 90-degree angle.",
        "Push off the front foot and return to the starting position to complete one repetition."
      ],
      image: "https://example.com/barbell-lunges.jpg"
    },
    {
      name: "Kettlebell Swings",
      description: "A dynamic exercise that targets the glutes and hamstrings. Use a kettlebell.",
      steps: [
        "Stand with your feet shoulder-width apart and hold a kettlebell with both hands between your legs.",
        "Hinge at your hips and swing the kettlebell forward to shoulder height, then back between your legs to complete one repetition."
      ],
      image: "https://example.com/kettlebell-swings.jpg"
    },
    {
      name: "Goblet Squats",
      description: "A squat variation that targets the quadriceps and core. Use a dumbbell or kettlebell.",
      steps: [
        "Hold a dumbbell or kettlebell close to your chest with both hands.",
        "Squat down, keeping your back straight, and return to the starting position to complete one repetition.",
      ],
      image: "https://example.com/goblet-squats.jpg"
    },
    {
      name: "Hack Squats",
      description: "A machine-based squat variation that targets the quadriceps. Use a hack squat machine.",
      steps: [
        "Place your shoulders and upper back against the pads of the hack squat machine.",
        "Position your feet on the platform hip-width apart and push the weight upward, then lower it to complete one repetition.",
      ],
      image: "https://example.com/hack-squats.jpg"
    },
    {
      name: "Sumo Deadlifts",
      description: "A wide-stance deadlift variation that targets the inner thighs and glutes. Use a barbell or dumbbells.",
      steps: [
        "Stand with your feet wider than shoulder-width apart and hold a barbell or dumbbells in front of you.",
        "Bend at your hips and knees to grasp the weight with an overhand grip.",
        "Lift the weight by extending your hips and knees to a fully upright position.",
        "Lower the weight back to the ground to complete one repetition."
      ],
      image: "https://example.com/sumo-deadlifts.jpg"
    },
  ];
  
  const bicepsExercises = [
    {
      name: "Barbell Curls",
      description: "An effective biceps exercise that targets the front of the upper arm. Use a barbell.",
      steps: [
        "Stand with your feet hip-width apart and hold a barbell with an underhand grip.",
        "Curl the barbell upward, keeping your elbows close to your body.",
        "Lower the barbell back to the starting position to complete one repetition."
      ],
      image: "https://example.com/barbell-curls.jpg"
    },
    {
      name: "Dumbbell Hammer Curls",
      description: "This variation targets the biceps and brachialis muscle. Use dumbbells.",
      steps: [
        "Stand with your feet hip-width apart and hold a dumbbell in each hand with a neutral grip (palms facing each other).",
        "Curl the dumbbells upward, keeping your elbows close to your body.",
        "Lower the dumbbells back to the starting position to complete one repetition."
      ],
      image: "https://example.com/dumbbell-hammer-curls.jpg"
    },
    {
      name: "Zottman Curls",
      description: "A variation of dumbbell curls that works the biceps and forearms. Use dumbbells.",
      steps: [
        "Stand with your feet hip-width apart and hold a dumbbell in each hand with a neutral grip (palms facing you).",
        "Curl the dumbbells upward, keeping your elbows close to your body.",
        "Rotate your wrists at the top, turning your palms to face down, and lower the dumbbells back to the starting position to complete one repetition."
      ],
      image: "https://example.com/zottman-curls.jpg"
    },
    {
      name: "Preacher Curls",
      description: "A biceps exercise that isolates the front of the upper arm. Use a preacher bench and a barbell or dumbbells.",
      steps: [
        "Sit at a preacher bench with your upper arms resting on the pad and your chest against it.",
        "Hold a barbell or dumbbells with an underhand grip and curl the weight upward.",
        "Lower the weight back to the starting position to complete one repetition."
      ],
      image: "https://example.com/preacher-curls.jpg"
    },
    {
      name: "Concentration Curls",
      description: "A biceps exercise that targets the biceps brachii. Use a dumbbell.",
      steps: [
        "Sit on a bench with your legs spread apart and hold a dumbbell in one hand between your legs.",
        "Rest your elbow on the inside of your thigh and curl the dumbbell upward.",
        "Lower the dumbbell back to the starting position to complete one repetition."
      ],
      image: "https://example.com/concentration-curls.jpg"
    },
    {
      name: "Incline Dumbbell Curls",
      description: "An exercise that targets the biceps. Use an incline bench and dumbbells.",
      steps: [
        "Set an incline bench to a comfortable angle and sit with your back against it.",
        "Hold a dumbbell in each hand with your arms fully extended and palms facing forward.",
        "Curl the dumbbells upward, keeping your elbows close to your body.",
        "Lower the dumbbells back to the starting position to complete one repetition."
      ],
      image: "https://example.com/incline-dumbbell-curls.jpg"
    },
    {
      name: "EZ-Bar Curls",
      description: "A biceps exercise that uses an EZ-bar for a different grip angle. Works the front of the upper arm.",
      steps: [
        "Stand with your feet hip-width apart and hold an EZ-bar with an underhand grip.",
        "Curl the bar upward, keeping your elbows close to your body.",
        "Lower the bar back to the starting position to complete one repetition."
      ],
      image: "https://example.com/ez-bar-curls.jpg"
    },
    {
      name: "21s",
      description: "A unique biceps exercise that involves three sets of 7 partial reps in different ranges of motion with a barbell or EZ-bar.",
      steps: [
        "Stand with your feet hip-width apart and hold a barbell or EZ-bar with an underhand grip.",
        "Perform the first 7 reps, curling the weight from the bottom to halfway up.",
        "Then perform the next 7 reps, curling the weight from halfway up to the top.",
        "Finally, perform the last 7 reps with full-range curls from bottom to top to complete one set."
      ],
      image: "https://example.com/21s.jpg"
    },
    {
      name: "Spider Curls",
      description: "An isolation exercise for the biceps. Use an incline bench and a barbell or EZ-bar.",
      steps: [
        "Set an incline bench to a steep angle and sit with your chest against it.",
        "Hold a barbell or EZ-bar with an underhand grip and allow your arms to hang straight down.",
        "Curl the bar upward, keeping your upper arms stationary and parallel to the bench.",
        "Lower the bar back to the starting position to complete one repetition."
      ],
      image: "https://example.com/spider-curls.jpg"
    },
    {
      name: "Cable Curls",
      description: "An exercise for the biceps using a cable machine and a straight bar attachment.",
      steps: [
        "Stand in front of a cable machine with a straight bar attachment at the lowest setting.",
        "Hold the bar with an underhand grip and curl it upward.",
        "Lower the bar back to the starting position to complete one repetition."
      ],
      image: "https://example.com/cable-curls.jpg"
    },
    {
      name: "Reverse Curls",
      description: "An exercise that targets the brachialis and brachioradialis. Use a barbell or EZ-bar with an overhand grip.",
      steps: [
        "Stand with your feet hip-width apart and hold a barbell or EZ-bar with an overhand grip.",
        "Curl the bar upward, keeping your elbows close to your body.",
        "Lower the bar back to the starting position to complete one repetition."
      ],
      image: "https://example.com/reverse-curls.jpg"
    },
    {
      name: "Alternating Dumbbell Curls",
      description: "A biceps exercise that targets one arm at a time. Use dumbbells.",
      steps: [
        "Stand with your feet hip-width apart and hold a dumbbell in each hand at your sides.",
        "Curl one dumbbell upward while keeping the other arm extended.",
        "Lower the curled dumbbell and switch to the other arm to complete one repetition."
      ],
      image: "https://example.com/alternating-dumbbell-curls.jpg"
    },
    {
      name: "21s (Cable Version)",
      description: "A cable machine variation of the 21s exercise for the biceps.",
      steps: [
        "Stand in front of a cable machine with a straight bar attachment at the lowest setting.",
        "Perform the first 7 reps, curling the weight from the bottom to halfway up.",
        "Then perform the next 7 reps, curling the weight from halfway up to the top.",
        "Finally, perform the last 7 reps with full-range curls from bottom to top to complete one set."
      ],
      image: "https://example.com/21s-cable-version.jpg"
    },
    {
      name: "Chin-Ups",
      description: "A bodyweight exercise that works the biceps and back. Hang from a pull-up bar with a supinated (underhand) grip.",
      steps: [
        "Hang from a pull-up bar with your hands shoulder-width apart and palms facing you.",
        "Pull your body upward until your chin is above the bar, then lower yourself back down to complete one repetition."
      ],
      image: "https://example.com/chin-ups.jpg"
    },
  ];
  
  const tricepsExercises = [
    {
      name: "Tricep Kickbacks",
      description: "An isolation exercise for the triceps. Use dumbbells.",
      steps: [
        "Bend at your hips to create a parallel back with the ground, knees slightly bent.",
        "Hold a dumbbell in each hand and extend your arms behind you with your palms facing each other.",
        "Bend your elbows and bring the dumbbells back to your sides, then extend your arms again to complete one repetition."
      ],
      image: "https://example.com/tricep-kickbacks.jpg"
    },
    {
      name: "Skull Crushers",
      description: "An exercise that targets the triceps. Use an EZ-bar or dumbbells.",
      steps: [
        "Lie on a bench with your feet flat on the ground and hold an EZ-bar or dumbbells above your chest with your arms extended.",
        "Bend your elbows to lower the bar or dumbbells toward your forehead.",
        "Extend your arms to return to the starting position to complete one repetition."
      ],
      image: "https://example.com/skull-crushers.jpg"
    },
    {
      name: "Close-Grip Bench Press",
      description: "A variation of the bench press that emphasizes the triceps. Use a barbell or dumbbells.",
      steps: [
        "Lie on a bench with your feet flat on the ground and hold a barbell or dumbbells with a close grip above your chest.",
        "Lower the bar or dumbbells to your chest and then press them back up to complete one repetition."
      ],
      image: "https://example.com/close-grip-bench-press.jpg"
    },
    {
      name: "Tricep Dips",
      description: "A bodyweight exercise that targets the triceps. You'll need parallel bars or a dip station.",
      steps: [
        "Stand between parallel bars or use a dip station, supporting your weight on your extended arms.",
        "Lower your body by bending your elbows until your shoulders are below your elbows.",
        "Push your body back up to the starting position to complete one repetition."
      ],
      image: "https://example.com/tricep-dips.jpg"
    },
    {
      name: "Diamond Push-Ups",
      description: "A push-up variation that places emphasis on the triceps. Form a diamond shape with your hands.",
      steps: [
        "Assume a push-up position with your hands close together, forming a diamond shape under your chest.",
        "Lower your body until your chest is near your hands, then push back up to complete one repetition."
      ],
      image: "https://example.com/diamond-push-ups.jpg"
    },
    {
      name: "Overhead Tricep Extensions",
      description: "An exercise that isolates the triceps. Use a dumbbell or an EZ-bar.",
      steps: [
        "Stand or sit with a dumbbell or EZ-bar held overhead with both hands, arms extended.",
        "Bend your elbows to lower the weight behind your head, then extend your arms to complete one repetition."
      ],
      image: "https://example.com/overhead-tricep-extensions.jpg"
    },
    {
      name: "Tricep Pushdowns",
      description: "An exercise that targets the triceps using a cable machine and a rope attachment.",
      steps: [
        "Stand in front of a cable machine with a rope attachment at chest height.",
        "Hold the rope with both hands and extend your arms, then bend your elbows to pull the rope downward.",
        "Return the rope to the starting position to complete one repetition."
      ],
      image: "https://example.com/tricep-pushdowns.jpg"
    },
    {
      name: "Close-Grip Push-Ups",
      description: "A push-up variation that focuses on the triceps. Place your hands close together under your chest.",
      steps: [
        "Assume a push-up position with your hands close together, under your chest.",
        "Lower your body until your chest is near your hands, then push back up to complete one repetition."
      ],
      image: "https://example.com/close-grip-push-ups.jpg"
    },
    {
      name: "Tricep Rope Extensions",
      description: "An exercise that targets the triceps using a cable machine and a rope attachment.",
      steps: [
        "Stand in front of a cable machine with a rope attachment at chest height.",
        "Hold the rope with both hands, arms extended, and palms facing each other.",
        "Bend your elbows to pull the rope downward, then extend your arms to complete one repetition."
      ],
      image: "https://example.com/tricep-rope-extensions.jpg"
    },
    {
      name: "Dips Machine",
      description: "An exercise that targets the triceps using a dip machine with adjustable arms.",
      steps: [
        "Adjust the dip machine to your desired settings and hold the handles with your arms extended.",
        "Lower your body by bending your elbows until your shoulders are below your elbows.",
        "Push your body back up to the starting position to complete one repetition."
      ],
      image: "https://example.com/dips-machine.jpg"
    },
    {
      name: "Push-Up Variations",
      description: "A range of push-up variations that work the triceps. Include options like decline push-ups, diamond push-ups, and more.",
      steps: [
        "Perform different push-up variations that target the triceps, such as decline push-ups, diamond push-ups, or tricep push-ups.",
        "Lower your body with the specific hand positioning or elevation, then push back up to complete one repetition."
      ],
      image: "https://example.com/push-up-variations.jpg"
    },
  ];
  
      