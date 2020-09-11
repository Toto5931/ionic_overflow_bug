import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonPage, IonContent, IonSlides, IonSlide, IonGrid, IonRow, IonCol } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './app.css';

const App: React.FC = () => (
  <IonApp>
    <IonPage>
      <IonContent>
        <IonSlides>
          <IonSlide>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <div className='comment'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae eius repellendus rem illo! Recusandae voluptatibus architecto accusamus earum tenetur, tempora corporis quidem natus deserunt, ipsa voluptatum quisquam, quo beatae doloribus?</div>

                </IonCol>
              </IonRow>
            </IonGrid>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  </IonApp>
);

export default App;
