import React, { useState } from 'react';
import { Calendar, Plus, Trash2, ChevronDown, ChevronUp, Save } from 'lucide-react';

const TrainingSchemaApp = () => {
  const [weeks, setWeeks] = useState([
    {
      id: 1,
      name: 'Week 16',
      trainings: [
        {
          id: 1,
          datum: 'zondag 30 nov',
          trainingNummer: '13',
          soortTraining: 'Wedstrijd Training',
          activatie: 'n.v.t.',
          evv: 'n.v.t.',
          teamfunctie: 'Aanvallen',
          teamintenties: [
            { type: 'EP', text: 'Optimale Veldbezetting (bezzting voor de goal & Restverdediging)' },
            { type: 'TP', text: 'Compact spelen (afstanden klein men en houden in diepte en breedte)' }
          ],
          individueleIntenties: [
            { type: 'EP', text: 'BBM - Snel richting goal of naar de ruimte om vooruit te komen' },
            { type: 'EP', text: 'BEA - Veldbezetting goed houden' },
            { type: 'TP', text: 'BBM - Tegstander voor je houden en afpakken. (niet uigespeeld worden, ongedwongen pass naar de goal voorkomen, moment kiezen om af te pakken)' },
            { type: 'TP', text: 'BEA - Tegenstander dekken en medespeler helpen' }
          ],
          oefenvormen: [
            '1. Rondo 5:2 + 4:2 ;',
            '2. Hooghouden',
            '3. Positiespel 6:6 + 1',
            '4. Eindspel : Keepersoorlog'
          ],
          trainingsvorm1: { type: 'Stap', content: '' },
          trainingsvorm2: { type: 'Stap', content: '' },
          formaties: '',
          spelregels: 'Speciale Regels *\n- Normale regels',
          mentaalGedrag: [
            { type: '014', text: 'Perfroming - Afspraken en begrip bewakenn /' },
            { type: '017', text: 'Norming - Afspraken en begrip bewaken' }
          ],
          notitie: '014 : wedstrijd tegen panenka'
        }
      ]
    }
  ]);

  const [expandedTraining, setExpandedTraining] = useState(null);

  const addWeek = () => {
    const newWeek = {
      id: weeks.length + 1,
      name: `Week ${weeks.length + 1}`,
      trainings: []
    };
    setWeeks([...weeks, newWeek]);
  };

  const addTraining = (weekId) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        const newTraining = {
          id: week.trainings.length + 1,
          datum: '',
          trainingNummer: '',
          soortTraining: '',
          activatie: '',
          evv: '',
          teamfunctie: '',
          teamintenties: [],
          individueleIntenties: [],
          oefenvormen: [''],
          trainingsvorm1: { type: 'Stap', content: '' },
          trainingsvorm2: { type: 'Stap', content: '' },
          formaties: '',
          spelregels: '',
          mentaalGedrag: [],
          notitie: ''
        };
        return { ...week, trainings: [...week.trainings, newTraining] };
      }
      return week;
    }));
  };

  const updateTraining = (weekId, trainingId, field, value) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          trainings: week.trainings.map(training => {
            if (training.id === trainingId) {
              return { ...training, [field]: value };
            }
            return training;
          })
        };
      }
      return week;
    }));
  };

  const addIntentie = (weekId, trainingId, type, intentieType) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          trainings: week.trainings.map(training => {
            if (training.id === trainingId) {
              return {
                ...training,
                [type]: [...training[type], { type: intentieType, text: '' }]
              };
            }
            return training;
          })
        };
      }
      return week;
    }));
  };

  const updateIntentie = (weekId, trainingId, type, index, field, value) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          trainings: week.trainings.map(training => {
            if (training.id === trainingId) {
              const newIntenties = [...training[type]];
              newIntenties[index] = { ...newIntenties[index], [field]: value };
              return { ...training, [type]: newIntenties };
            }
            return training;
          })
        };
      }
      return week;
    }));
  };

  const deleteIntentie = (weekId, trainingId, type, index) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          trainings: week.trainings.map(training => {
            if (training.id === trainingId) {
              return {
                ...training,
                [type]: training[type].filter((_, i) => i !== index)
              };
            }
            return training;
          })
        };
      }
      return week;
    }));
  };

  const addOefenvorm = (weekId, trainingId) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          trainings: week.trainings.map(training => {
            if (training.id === trainingId) {
              return {
                ...training,
                oefenvormen: [...training.oefenvormen, '']
              };
            }
            return training;
          })
        };
      }
      return week;
    }));
  };

  const updateOefenvorm = (weekId, trainingId, index, value) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          trainings: week.trainings.map(training => {
            if (training.id === trainingId) {
              const newOefenvormen = [...training.oefenvormen];
              newOefenvormen[index] = value;
              return { ...training, oefenvormen: newOefenvormen };
            }
            return training;
          })
        };
      }
      return week;
    }));
  };

  const deleteOefenvorm = (weekId, trainingId, index) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          trainings: week.trainings.map(training => {
            if (training.id === trainingId) {
              return {
                ...training,
                oefenvormen: training.oefenvormen.filter((_, i) => i !== index)
              };
            }
            return training;
          })
        };
      }
      return week;
    }));
  };

  const addMentaalGedrag = (weekId, trainingId) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          trainings: week.trainings.map(training => {
            if (training.id === trainingId) {
              return {
                ...training,
                mentaalGedrag: [...training.mentaalGedrag, { type: '014', text: '' }]
              };
            }
            return training;
          })
        };
      }
      return week;
    }));
  };

  const updateMentaalGedrag = (weekId, trainingId, index, field, value) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          trainings: week.trainings.map(training => {
            if (training.id === trainingId) {
              const newMentaal = [...training.mentaalGedrag];
              newMentaal[index] = { ...newMentaal[index], [field]: value };
              return { ...training, mentaalGedrag: newMentaal };
            }
            return training;
          })
        };
      }
      return week;
    }));
  };

  const deleteMentaalGedrag = (weekId, trainingId, index) => {
    setWeeks(weeks.map(week => {
      if (week.id === weekId) {
        return {
          ...week,
          trainings: week.trainings.map(training => {
            if (training.id === trainingId) {
              return {
                ...training,
                mentaalGedrag: training.mentaalGedrag.filter((_, i) => i !== index)
              };
            }
            return training;
          })
        };
      }
      return week;
    }));
  };

  const toggleExpand = (weekId, trainingId) => {
    const key = `${weekId}-${trainingId}`;
    setExpandedTraining(expandedTraining === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl font-bold text-gray-800">Trainingsschema Manager</h1>
            </div>
            <button
              onClick={addWeek}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              Nieuwe Week
            </button>
          </div>
        </div>

        {weeks.map(week => (
          <div key={week.id} className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{week.name}</h2>
              <button
                onClick={() => addTraining(week.id)}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="w-5 h-5" />
                Nieuwe Training
              </button>
            </div>

            {week.trainings.map(training => {
              const isExpanded = expandedTraining === `${week.id}-${training.id}`;
              return (
                <div key={training.id} className="border border-gray-300 rounded-lg mb-4">
                  <div
                    className="bg-black text-white p-4 flex items-center justify-between cursor-pointer"
                    onClick={() => toggleExpand(week.id, training.id)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-bold">Training {training.trainingNummer || '#'}</span>
                      <span>{training.datum}</span>
                      <span className="text-sm">{training.soortTraining}</span>
                    </div>
                    {isExpanded ? <ChevronUp /> : <ChevronDown />}
                  </div>

                  {isExpanded && (
                    <div className="p-4 space-y-4">
                      {/* Basis informatie */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Datum</label>
                          <input
                            type="text"
                            value={training.datum}
                            onChange={(e) => updateTraining(week.id, training.id, 'datum', e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="zondag 30 nov"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Training nummer</label>
                          <input
                            type="text"
                            value={training.trainingNummer}
                            onChange={(e) => updateTraining(week.id, training.id, 'trainingNummer', e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="13"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Soort training</label>
                        <input
                          type="text"
                          value={training.soortTraining}
                          onChange={(e) => updateTraining(week.id, training.id, 'soortTraining', e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2"
                          placeholder="Wedstrijd Training"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Activatie</label>
                          <input
                            type="text"
                            value={training.activatie}
                            onChange={(e) => updateTraining(week.id, training.id, 'activatie', e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="n.v.t."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">EVV</label>
                          <input
                            type="text"
                            value={training.evv}
                            onChange={(e) => updateTraining(week.id, training.id, 'evv', e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="n.v.t."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Teamfunctie</label>
                          <input
                            type="text"
                            value={training.teamfunctie}
                            onChange={(e) => updateTraining(week.id, training.id, 'teamfunctie', e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Aanvallen"
                          />
                        </div>
                      </div>

                      {/* Teamintenties */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-700">Teamintenties die centraal staan</h3>
                          <div className="flex gap-2">
                            <button
                              onClick={() => addIntentie(week.id, training.id, 'teamintities', 'EP')}
                              className="text-xs bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            >
                              + EP
                            </button>
                            <button
                              onClick={() => addIntentie(week.id, training.id, 'teamintities', 'TP')}
                              className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                              + TP
                            </button>
                          </div>
                        </div>
                        {training.teamintities && training.teamintities.map((intentie, idx) => (
                          <div key={idx} className="flex gap-2 mb-2">
                            <select
                              value={intentie.type}
                              onChange={(e) => updateIntentie(week.id, training.id, 'teamintities', idx, 'type', e.target.value)}
                              className={`border rounded px-2 py-1 ${intentie.type === 'EP' ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'}`}
                            >
                              <option value="EP">EP</option>
                              <option value="TP">TP</option>
                            </select>
                            <input
                              type="text"
                              value={intentie.text}
                              onChange={(e) => updateIntentie(week.id, training.id, 'teamintities', idx, 'text', e.target.value)}
                              className={`flex-1 border rounded px-3 py-2 ${intentie.type === 'EP' ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}
                              placeholder="Beschrijving..."
                            />
                            <button
                              onClick={() => deleteIntentie(week.id, training.id, 'teamintities', idx)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Individuele intenties */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-700">Individuele intenties die centraal staan</h3>
                          <div className="flex gap-2">
                            <button
                              onClick={() => addIntentie(week.id, training.id, 'individueleIntenties', 'EP')}
                              className="text-xs bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            >
                              + EP
                            </button>
                            <button
                              onClick={() => addIntentie(week.id, training.id, 'individueleIntenties', 'TP')}
                              className="text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                              + TP
                            </button>
                          </div>
                        </div>
                        {training.individueleIntenties.map((intentie, idx) => (
                          <div key={idx} className="flex gap-2 mb-2">
                            <select
                              value={intentie.type}
                              onChange={(e) => updateIntentie(week.id, training.id, 'individueleIntenties', idx, 'type', e.target.value)}
                              className={`border rounded px-2 py-1 ${intentie.type === 'EP' ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'}`}
                            >
                              <option value="EP">EP</option>
                              <option value="TP">TP</option>
                            </select>
                            <input
                              type="text"
                              value={intentie.text}
                              onChange={(e) => updateIntentie(week.id, training.id, 'individueleIntenties', idx, 'text', e.target.value)}
                              className={`flex-1 border rounded px-3 py-2 ${intentie.type === 'EP' ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'}`}
                              placeholder="Beschrijving..."
                            />
                            <button
                              onClick={() => deleteIntentie(week.id, training.id, 'individueleIntenties', idx)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Oefenvormen */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-700">Oefenvormen</h3>
                          <button
                            onClick={() => addOefenvorm(week.id, training.id)}
                            className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                          >
                            + Oefenvorm
                          </button>
                        </div>
                        {training.oefenvormen.map((vorm, idx) => (
                          <div key={idx} className="flex gap-2 mb-2">
                            <input
                              type="text"
                              value={vorm}
                              onChange={(e) => updateOefenvorm(week.id, training.id, idx, e.target.value)}
                              className="flex-1 border border-gray-300 rounded px-3 py-2"
                              placeholder={`${idx + 1}. Oefenvorm...`}
                            />
                            <button
                              onClick={() => deleteOefenvorm(week.id, training.id, idx)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Trainingsvormen */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-100 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-700 mb-2">Trainingsvorm 1</h3>
                          <select
                            value={training.trainingsvorm1.type}
                            onChange={(e) => updateTraining(week.id, training.id, 'trainingsvorm1', { ...training.trainingsvorm1, type: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                          >
                            <option value="Stap">Stap</option>
                            <option value="Anders">Anders</option>
                          </select>
                          <textarea
                            value={training.trainingsvorm1.content}
                            onChange={(e) => updateTraining(week.id, training.id, 'trainingsvorm1', { ...training.trainingsvorm1, content: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            rows="3"
                            placeholder="Beschrijving..."
                          />
                        </div>
                        <div className="bg-green-100 p-4 rounded-lg">
                          <h3 className="font-semibold text-gray-700 mb-2">Trainingsvorm 2</h3>
                          <select
                            value={training.trainingsvorm2.type}
                            onChange={(e) => updateTraining(week.id, training.id, 'trainingsvorm2', { ...training.trainingsvorm2, type: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
                          >
                            <option value="Stap">Stap</option>
                            <option value="Anders">Anders</option>
                          </select>
                          <textarea
                            value={training.trainingsvorm2.content}
                            onChange={(e) => updateTraining(week.id, training.id, 'trainingsvorm2', { ...training.trainingsvorm2, content: e.target.value })}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            rows="3"
                            placeholder="Beschrijving..."
                          />
                        </div>
                      </div>

                      {/* Formaties en Spelregels */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Formaties EP - TP</label>
                          <textarea
                            value={training.formaties}
                            onChange={(e) => updateTraining(week.id, training.id, 'formaties', e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            rows="3"
                            placeholder="Formaties..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-1">Spelregels</label>
                          <textarea
                            value={training.spelregels}
                            onChange={(e) => updateTraining(week.id, training.id, 'spelregels', e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            rows="3"
                            placeholder="Speciale Regels *..."
                          />
                        </div>
                      </div>

                      {/* Mentaal/gedrag */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-700">Mentaal/gedrag</h3>
                          <button
                            onClick={() => addMentaalGedrag(week.id, training.id)}
                            className="text-xs bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600"
                          >
                            + Mentaal/gedrag
                          </button>
                        </div>
                        {training.mentaalGedrag.map((item, idx) => (
                          <div key={idx} className="flex gap-2 mb-2">
                            <select
                              value={item.type}
                              onChange={(e) => updateMentaalGedrag(week.id, training.id, idx, 'type', e.target.value)}
                              className="border border-gray-300 rounded px-2 py-1"
                            >
                              <option value="014">014</option>
                              <option value="017">017</option>
                            </select>
                            <input
                              type="text"
                              value={item.text}
                              onChange={(e) => updateMentaalGedrag(week.id, training.id, idx, 'text', e.target.value)}
                              className={`flex-1 border rounded px-3 py-2 ${item.type === '014' ? 'bg-gray-50 border-gray-300' : 'bg-orange-50 border-orange-300'}`}
                              placeholder="Beschrijving..."
                            />
                            <button
                              onClick={() => deleteMentaalGedrag(week.id, training.id, idx)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Notitie */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Notitie</label>
                        <textarea
                          value={training.notitie}
                          onChange={(e) => updateTraining(week.id, training.id, 'notitie', e.target.value)}
                          className="w-full border border-green-400 bg-green-50 rounded px-3 py-2"
                          rows="2"
                          placeholder="Notities..."
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingSchemaApp;
