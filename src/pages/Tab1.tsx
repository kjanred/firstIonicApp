import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel, IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab1.css';

const Tab1: React.FC = () => {

  const [dataset, setDataset] = useState<any[]>([]);

  const dataURL = "https://dev-janredsql.pantheonsite.io/wp-json/twentyseventeen-child/v1/customerstable";

  useEffect(() => {
    fetch(dataURL) 
    .then(response => response.json()) 
    .then(data => setDataset(data)) 
  },[])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Important Customers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList id="customers-list">
          <IonListHeader>Important Customers</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
            <IonLabel>
              <IonCard>
              <img alt={item.first_name} src={item.guid} />
              <IonCardHeader>
              <IonCardTitle>{item.first_name} {item.last_named}</IonCardTitle>
                    <IonCardSubtitle>{item.email}</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent></IonCardContent>
              </IonCard>
            </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
