async function getOSRSSkills() {
  const url = 'https://api.wiseoldman.net/v2/players/Bone-A Lisa';
  
  try {
    // Fetch data from the endpoint
    const response = await fetch(url);

    // Check if the response is ok
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    // Parse the JSON data
    const data = await response.json();

    // Destructure the data into unique variables
    const {
      id,
      username,
      displayName,
      type,
      build,
      country,
      status,
      patron,
      exp,
      ehp,
      ehb,
      ttm,
      tt200m,
      registeredAt,
      updatedAt,
      lastChangedAt,
      lastImportedAt,
      combatLevel,
      archive,
      latestSnapshot
    } = data;

    // Further destructure the latestSnapshot object if needed
    const {
      id: snapshotId,
      playerId,
      createdAt: snapshotCreatedAt,
      importedAt: snapshotImportedAt,
      data: snapshotData
    } = latestSnapshot;

    // Further destructure snapshotData into skills, bosses, activities, and computed
    const {
      skills,
      bosses,
      activities,
      computed
    } = snapshotData;

    // Example of accessing specific skill data
    const overallSkill = skills.overall;
    
    // Iterate over each skill and update HTML elements
    for (const skillName in skills) {
      if (skills.hasOwnProperty(skillName)) {
        const skill = skills[skillName];
        const skillLevel = skill.level;

        // Select the HTML element with the class matching the skill name
        const element = document.querySelector(`.${skillName}`);

        // If the element exists, update its content
        if (element) {
          element.textContent = skillLevel;
        } else {
          console.warn(`No element found with class: ${skillName}`);
        }
      }
    }

    // Return the parsed data for further use
    return {
      id,
      username,
      displayName,
      type,
      build,
      country,
      status,
      patron,
      exp,
      ehp,
      ehb,
      ttm,
      tt200m,
      registeredAt,
      updatedAt,
      lastChangedAt,
      lastImportedAt,
      combatLevel,
      archive,
      snapshotId,
      playerId,
      snapshotCreatedAt,
      snapshotImportedAt,
      skills,
      bosses,
      activities,
      computed
    };

  } catch (error) {
    // Handle any errors
    console.error('Error fetching player data:', error);
  }
}

// Call the function to fetch and parse the data
getOSRSSkills();

