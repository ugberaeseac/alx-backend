import kue from 'kue';
const queue = kue.createQueue();

const dummyData = {
  phoneNumber: '08030000009',
  message: 'So happy to be graduating from ALX soon',
};

const job = queue.create('push_notification_code', dummyData)
  .save((error) => {
    if (!error) {
      console.log(`Notification job created: ${job.id}`);
    };
  });

job.on('complete', (result) => {
  console.log('Notification job completed')
});

job.on('failed', (errorMessage) => {
  console.log('Notification job failed');
});
