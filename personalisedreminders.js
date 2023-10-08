// Assuming you have a list of vehicles with their details
const vehicles = [
    {
      make: 'Toyota',
      model: 'Camry',
      lastServiceDate: new Date('2023-09-01'),
      nextServiceType: 'Regular Maintenance',
      nextServiceDate: new Date('2023-10-01'),
    },
    {
      make: 'Honda',
      model: 'Civic',
      lastServiceDate: new Date('2023-08-15'),
      nextServiceType: 'Oil Change',
      nextServiceDate: new Date('2023-09-15'),
    },
    // Add more vehicles here...
  ];
  
  // Function to check and schedule reminders
  function scheduleReminders(vehicles) {
    const today = new Date();
  
    vehicles.forEach(vehicle => {
      // Compare today's date with the next service date
      if (vehicle.nextServiceDate <= today) {
        // Schedule a reminder for the specified service type
        switch (vehicle.nextServiceType) {
          case 'Regular Maintenance':
            console.log(`Reminder: Schedule regular maintenance for ${vehicle.make} ${vehicle.model}.`);
            break;
          case 'Oil Change':
            console.log(`Reminder: Schedule an oil change for ${vehicle.make} ${vehicle.model}.`);
            break;
          case 'Tire Rotation':
            console.log(`Reminder: Schedule a tire rotation for ${vehicle.make} ${vehicle.model}.`);
            break;
          case 'Inspection':
            console.log(`Reminder: Schedule an inspection for ${vehicle.make} ${vehicle.model}.`);
            break;
          // Add more service types as needed...
          default:
            console.log(`Reminder: Unknown service type for ${vehicle.make} ${vehicle.model}.`);
        }
  
        // Update next service date for the next reminder
        // For demonstration purposes, let's assume a monthly interval
        vehicle.nextServiceDate.setMonth(vehicle.nextServiceDate.getMonth() + 1);
      }
    });
  }
  
  // Call the function to schedule reminders
  scheduleReminders(vehicles);
  