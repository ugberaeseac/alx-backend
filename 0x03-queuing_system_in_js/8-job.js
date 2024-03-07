function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw new Error("Jobs is not an array");
  }

  for (let aJob of jobs) {
    const job = queue.create('push_notification_code_3', aJob)
      .save((error) => {
        if (!error) {
          console.log(`Notification job created: ${job.id}`);
        };
    });

    job.on('complete', (result) => {
    console.log(`Notification job ${job.id} completed`);
    });

    job.on('failed', (errorMessage) => {
    console.log(`Notification job ${job.id} failed: ${errorMessage.message}`);
    });

    job.on('progress', (progress) => {
    console.log(`Notification job ${job.id} ${progress}% complete`);
    });
};
};

module.exports = createPushNotificationsJobs;
