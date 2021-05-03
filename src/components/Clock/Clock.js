import { useEffect, useState } from "react";
import { clock } from 'utils';
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentOffice } from "redux/app/selectors";
import { Actions as AppActions } from "redux/app/actions";
import { useCookies } from "react-cookie";

const Clock = () => {
  const dispatch = useDispatch();
  const currentOffice = useSelector(selectCurrentOffice);
  const [cookies, setCookie] = useCookies(["office"]);

  const [baTime, setBaTime] = useState();
  const [spTime, setSpTime] = useState();
  const [usTime, setUsTime] = useState();

  const setOffice = (officeId) => {
    dispatch(AppActions.setCurrentOffice(officeId));
    setCookie("office", officeId, { path: "/" });
  }

  useEffect(() => {
    setBaTime(clock("America/Argentina/Buenos_Aires"));
    setSpTime(clock("America/Bahia"));
    setUsTime(clock("America/New_York"));

    setInterval(() => {
      setBaTime(clock("America/Argentina/Buenos_Aires"));
      setSpTime(clock("America/Bahia"));
      setUsTime(clock("America/New_York"));
    }, 1000);
  }, [currentOffice])

  return (
    <>
      <a className={currentOffice == 'ba' ? 'active' : ''} onClick={() => { setOffice('ba') }}><span>BA</span>{baTime}</a>
      <a className={currentOffice == 'sp' ? 'active' : ''} onClick={() => { setOffice('sp') }}><span>SP</span>{spTime}</a>
      <a className={currentOffice == 'mia' ? 'active' : ''} onClick={() => { setOffice('mia') }}><span>MIA</span>{usTime}</a>
    </>
  )
}

export default Clock;
