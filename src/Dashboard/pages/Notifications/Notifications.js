import { Notification, NotificationCard } from './Notifications.styled';
import { FaRegTimesCircle } from 'react-icons/fa';
const Notifications = () => {
  return (
    <NotificationCard>
      <Notification unread>
        <span />
        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis voluptatem a quia explicabo iusto illo officiis,
            dolores, placeat reprehenderit tenetur alias.
          </p>
        </div>
        <FaRegTimesCircle />
      </Notification>
      <Notification>
        <span />
        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis voluptatem a quia explicabo iusto illo officiis,
            dolores, placeat reprehenderit tenetur alias.
          </p>
        </div>
        <FaRegTimesCircle />
      </Notification>
      <Notification>
        <span />
        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis voluptatem a quia explicabo iusto illo officiis,
            dolores, placeat reprehenderit tenetur alias.
          </p>
        </div>
        <FaRegTimesCircle />
      </Notification>
      <Notification>
        <span />
        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis voluptatem a quia explicabo iusto illo officiis,
            dolores, placeat reprehenderit tenetur alias.
          </p>
        </div>
        <FaRegTimesCircle />
      </Notification>
      <Notification>
        <span />
        <div>
          <h3>Lorem Ipsum</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perspiciatis voluptatem a quia explicabo iusto illo officiis,
            dolores, placeat reprehenderit tenetur alias.
          </p>
        </div>
        <FaRegTimesCircle />
      </Notification>
    </NotificationCard>
  );
};

export default Notifications;
