import React from 'react';
import style from './advantages.module.scss';

const Advantages = () => {
  return (
    <section className={style.advantages}>
      <h2 className="visually-hidden">Преимущества</h2>
      <ul className={style.advantagesList}>
        <li className={style.advantagesItem}>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.2963 32.8077V32.8077C8.02809 32.8077 7 33.8358 7 35.104V38H38V35.8077C38 34.1508 36.6569 32.8077 35 32.8077H31.9722M9.2963 32.8077V16.7692C9.2963 15.1124 10.6394 13.7692 12.2963 13.7692H13.3148M9.2963 32.8077H21.9259M21.9259 32.8077V19.5385H27.6667V25.3077H29.3889M21.9259 32.8077H31.9722M29.3889 25.3077V26.1859C29.3889 27.6126 30.5455 28.7692 31.9722 28.7692V28.7692M29.3889 25.3077H34.5556M34.5556 25.3077H36.2778V16.7692C36.2778 15.1124 34.9346 13.7692 33.2778 13.7692H32.2593M34.5556 25.3077V26.1859C34.5556 27.6126 33.399 28.7692 31.9722 28.7692V28.7692M31.9722 28.7692V32.8077M13.3148 13.7692V8H18.4815V13.7692M13.3148 13.7692H18.4815M18.4815 13.7692H32.2593M32.2593 13.7692V11.4615"
              stroke="#222222"
            />
            <circle cx="15.5" cy="26.5" r="3" stroke="#222222" />
          </svg>
          <h3 className={style.advantagesTitle}>Индивидуальный пошив</h3>
        </li>
        <li className={style.advantagesItem}>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.2881 23.3514L9.07784 31.34C8.40154 31.822 8 32.6012 8 33.4316V33.4316C8 34.8501 9.1499 36 10.5684 36H34.4458C35.8565 36 37 34.8565 37 33.4458V33.4458C37 32.608 36.5891 31.8234 35.9004 31.3463L22.2542 21.8919V18"
              stroke="#222222"
            />
            <circle cx="36.5" cy="34.5" r="4" fill="#7ED321" stroke="white" />
            <path
              d="M18 14C18 11.7909 19.7909 10 22 10C24.2091 10 26 11.7909 26 14C26 16.2091 24.2091 18 22 18"
              stroke="#222222"
            />
          </svg>
          <h3 className={style.advantagesTitle}>Онлайн примерочная</h3>
        </li>
        <li className={style.advantagesItem}>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30.8998 32.3501H11.0498C9.94524 32.3501 9.0498 31.4546 9.0498 30.3501V21.5V11.925C9.0498 10.8205 9.94524 9.92505 11.0498 9.92505H28.8998C30.0044 9.92505 30.8998 10.8205 30.8998 11.925V16.2501M30.8998 32.3501V23.7251M30.8998 32.3501H42.9748V23.7251M30.8998 16.2501H36.0748L42.9748 23.7251M30.8998 16.2501V23.7251M42.9748 23.7251H30.8998"
              stroke="#222222"
            />
            <path
              d="M15.7998 22H4.2998"
              stroke="#222222"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.225 26.5999H2"
              stroke="#222222"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.0496 32.35C20.0496 34.6144 18.214 36.45 15.9496 36.45C13.6852 36.45 11.8496 34.6144 11.8496 32.35C11.8496 30.0856 13.6852 28.25 15.9496 28.25C18.214 28.25 20.0496 30.0856 20.0496 32.35Z"
              fill="white"
              stroke="#222222"
            />
            <path
              d="M40.7498 32.35C40.7498 34.6144 38.9142 36.45 36.6498 36.45C34.3854 36.45 32.5498 34.6144 32.5498 32.35C32.5498 30.0856 34.3854 28.25 36.6498 28.25C38.9142 28.25 40.7498 30.0856 40.7498 32.35Z"
              fill="white"
              stroke="#222222"
            />
          </svg>
          <h3 className={style.advantagesTitle}>Доставка по России</h3>
        </li>
        <li className={style.advantagesItem}>
          <svg
            width="46"
            height="46"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M36 17.28H14.1053M36 17.28L18.2105 9L17.1158 12.7211M36 17.28L17.1158 12.7211M36 17.28V31.8M14.1053 17.28H12C10.8954 17.28 10 18.1754 10 19.28V31.8M14.1053 17.28L15.2 12.36L17.1158 12.7211M10 31.8V35C10 36.1046 10.8954 37 12 37H34C35.1046 37 36 36.1046 36 35V31.8M10 31.8H36"
              stroke="#222222"
            />
          </svg>

          <h3 className={style.advantagesTitle}>Удобные способы оплаты</h3>
        </li>
      </ul>
    </section>
  );
};

export default Advantages;
