import React, {useEffect, useState} from 'react'

function UseeffectHook() {
    // useEffect(() => {
    //     // Обратите внимание, обработчик можно создать прямо в эффекте, 
    //     // это будет работать правильно
    //     const fn = () => console.log('handle mousemove');

    //     const fn1 = () => console.log("remove event")
        
    //     // добавим обработчик при монтировании компонента
    //     window.addEventListener('mousemove', fn);
        
    //     return () => {
    //       // это cleanup здесь мы заметаем следы от наших предыдущих действий
    //       // удалим обработчик при размонтировании компонента
    //       window.removeEventListener('mousemove', fn1);
    //     };
    //   // Обратите внимание, что массив зависимостей пустой,
    //   // Значит эффект сработает строго при монтировании/размонтировании
    //   }, []);

    let interval = 2000;

    const [time, setTime] = useState(new Date().toISOString());
    useEffect(() => {
      // При монтировании/обновлении запускаем интервал
      const intervalId = setInterval(() => {
        setTime(new Date().toISOString())
      }, interval);
      
      return () => {
        // При размонтировании/до обновления interval останавливаем
        // существующий интервал
        clearInterval(intervalId);
      };
    }, [interval]);


      
  return (
    <div>UseeffectHook {time}</div>
  )
}

export default UseeffectHook